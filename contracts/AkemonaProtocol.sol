//import "./AkemonaWhitelist.sol";

import "../node_modules/openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/utils/structs/EnumerableSet.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./IAkemonaProtocol.sol";
import "./IAkemonaSecurityTokenFactory.sol";
import "./IAkemonaWhitelist.sol";
import "./IAkemonaSecurityToken.sol";

contract AkemonaProtocol is
    AccessControlEnumerable,
    IAkemonaProtocol
{
    using EnumerableSet for EnumerableSet.AddressSet;

    // ================
    // Protocol-level roles, tokens, fees
    // ================
    bytes32 public constant PROTOCOL_ADMIN_ROLE = keccak256("PROTOCOL_ADMIN_ROLE");
    IERC20 public akenroToken;      // The AKENRO token
    address public treasuryWallet;  // Where AKENRO offering creation fees go
    uint256 public offeringCreationFee;
    address public securityTokenFactoryAddress;

    // ================
    // USDC reference
    // ================
    IERC20 public usdc; // The USDC token used for payments

    // ================
    // Offerings
    // ================
    uint256 public nextOfferingId;

    struct Offering {
        address owner;
        address escrow;
        uint256 goal;
        uint256 cap;
        uint256 raised;
        uint256 openingTime;
        uint256 closingTime;
        uint256 maturityTime;
        uint256 disbursementTime;
        uint256 minimumInvestment;
        uint256 effectiveDailyRate;
        bool directRefund; // if direct refund is used
        bool isDisbursed;
        string securityType;
        address securityToken;
        bool closed; // track if offering is "closed"
        bool exists;
        uint256 transactionId;
        uint256 merkleInvestorCount;
        uint256 merkleInvestmentCount;
    }

    // offeringId => Offering
    mapping(uint256 => Offering) public offerings;

    // ================
    // Whitelists
    // ================
    struct WhitelistInfo {
        address whitelistContract;
        bool exists;
    }
    // Next ID for whitelists
    uint256 public nextWhitelistId;

    mapping(uint256 => WhitelistInfo) public whitelists;

    // ================
    // Purchase / Refund Logic
    // ================
    struct Purchase {
        address investor;
        bytes32 investorId;  // if no wallet, store a userId or similar
        uint256 paid;        // how many USDC
        uint256 received;    // how many tokens minted
        bool refunded;       // is it refunded yet
        bool refundRequested;
        bool refundAllocated;
        bool requiresReconfirm;
        bool noWallet;       // if it was purchased with no wallet
        bool offchain;       // if purchase is considered offchain
        bytes32 offchainPurchaseId;
        uint256 timestamp;   // purchase time
        bool isClosed;       // if this purchase was "rolled closed"
    }
    // offeringId => array of Purchase
    mapping(uint256 => Purchase[]) public offeringPurchases;

    struct RefundRequest {
        uint256 purchaseIndex;
        bool isReconfirm;
    }
    // offeringId => array of RefundRequest
    mapping(uint256 => RefundRequest[]) public offeringRefundRequests;

    // ================
    // Events
    // ================
    event OfferingCreated(uint256 indexed offeringId, address indexed owner, address securityToken);
    event PurchaseEvent(
        uint256 indexed offeringId,
        uint256 indexed purchaseIndex,
        address indexed investor,
        uint256 paid,
        uint256 received
    );
    event ConvertNoWalletEvent(uint256 indexed offeringId, uint256 indexed purchaseIndex, address wallet);
    event RefundRequestedEvent(
        uint256 indexed offeringId,
        uint256 indexed purchaseIndex,
        address indexed purchaser,
        uint256 paid,
        uint256 received
    );
    event RefundProcessedEvent(
        uint256 indexed offeringId,
        uint256 indexed purchaseIndex,
        address indexed purchaser,
        uint256 paid,
        uint256 received
    );
    event ReconfirmEvent(uint256 indexed offeringId, uint256 indexed _purchaseIndex, address indexed _purchaser, uint256 _paid, uint256 _received);
    event PurchaseClosedEvent(uint256 indexed offeringId, uint256 indexed _purchaseIndex, address indexed _purchaser, uint256 _paid, uint256 _received );
    event OfferingClosedEvent(uint256 indexed offeringId);
    event RollingClosedEvent(uint256 indexed offeringId, uint256 timestamp);
    event RefundAllocatedEvent(uint256 indexed offeringId, uint256 indexed _purchaseIndex, address indexed _purchaser, uint256 _paid, uint256 _received);
    event RecoverTokenEvent(uint256 offeringId, uint256 indexed _purchaseIndex, address indexed _oldAddress, address _newAddress);

    // ================
    // Constructor
    // ================
    constructor(
        address _akenroToken,
        address _treasuryWallet,
        uint256 _offeringCreationFee,
        address _usdc,
        address _securityTokenFactoryAddress
    ) {
        require(_akenroToken != address(0), "AKENRO token cannot be zero");
        require(_treasuryWallet != address(0), "treasuryWallet cannot be zero");
        require(_usdc != address(0), "usdc cannot be zero");

        akenroToken = IERC20(_akenroToken);
        treasuryWallet = _treasuryWallet;
        offeringCreationFee = _offeringCreationFee;
        securityTokenFactoryAddress = _securityTokenFactoryAddress;

        usdc = IERC20(_usdc);

        // set up roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PROTOCOL_ADMIN_ROLE, msg.sender);

        nextOfferingId = 1;
        nextWhitelistId = 1;
    }

    // --------------------------------------------------------------------------------
    // CREATE & MANAGE OFFERINGS
    // --------------------------------------------------------------------------------
    function createOffering(
        // main offering parameters
        address escrow,
        uint256 openingTime,
        uint256 closingTime,
        uint256 maturityTime,
        uint256 minimumInvestment,
        uint256 goal,
        uint256 cap,
        uint256 effectiveDailyRate,
        bool directRefund,
        string memory securityType,
        // token info
        string memory tokenName,
        string memory tokenSymbol
    ) external returns (uint256) {
        // 1. take the required AKENRO fee from the offering owner
        require(
            akenroToken.allowance(msg.sender, address(this)) >= offeringCreationFee,
            "Insufficient AKENRO allowance"
        );
        akenroToken.transferFrom(msg.sender, treasuryWallet, offeringCreationFee);

        // 2. validate times
        require(closingTime > openingTime, "closingTime must be after openingTime");
        require(maturityTime > closingTime, "maturityTime must be after closingTime");

        // 3. deploy the new security token
        uint256 offeringId = nextOfferingId;
        address newToken = _deploySecurityToken(tokenName, tokenSymbol, offeringId);

        // 4. store the offering
        offerings[offeringId] = Offering({
            owner: msg.sender,
            escrow: escrow,
            goal: goal,
            cap: cap,
            raised: 0,
            openingTime: openingTime,
            closingTime: closingTime,
            maturityTime: maturityTime,
            disbursementTime: 0,
            minimumInvestment: minimumInvestment,
            effectiveDailyRate: effectiveDailyRate,
            directRefund: directRefund,
            isDisbursed: false,
            securityType: securityType,
            securityToken: newToken,
            closed: false,
            exists: true,            
            transactionId: 1,
            merkleInvestorCount: 0,
            merkleInvestmentCount: 0
        });
        nextOfferingId++;

        emit OfferingCreated(offeringId, msg.sender, newToken);
        return offeringId;
    }

    // internal helper to deploy the token
    function _deploySecurityToken(
        string memory name,
        string memory symbol,
        uint256 offeringId
    ) internal returns (address) {
        address tokenAddress = IAkemonaSecurityTokenFactory(securityTokenFactoryAddress).deployToken(
            offeringId,
            name,
            symbol,
            address(this)
        );

        IAkemonaSecurityToken token = IAkemonaSecurityToken(tokenAddress);

        token.grantRole(token.getDefaultAdminRole(), msg.sender);
        // granting the protocol to have minter role:
        token.grantRole(token.getMinterRole(), address(this));
        //token.grantRole(token.PAUSER_ROLE(), address(this));

        token.renounceRole(token.getDefaultAdminRole(), address(this));
        return address(token);
    }

    function updateOfferingCap(uint256 offeringId, uint256 newCap) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        off.cap = newCap;
    }

    // --------------------------------------------------------------------------------
    // WHITELIST MANAGEMENT
    // --------------------------------------------------------------------------------
    event WhitelistCreated(uint256 whitelistId, address whitelistContract);

    mapping(uint256 => uint256[]) public offeringToWhitelists; // each offering can have multiple whitelists

    function attachWhitelistToOffering(uint256 offeringId, address whitelistContract) external {
        require(whitelistContract != address(0), "No zero address");
        uint256 id = nextWhitelistId;
        whitelists[id] = WhitelistInfo({
            whitelistContract: whitelistContract,
            exists: true
        });
        nextWhitelistId++;
        emit WhitelistCreated(id, whitelistContract);

        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(whitelists[id].exists, "No such whitelist");
        offeringToWhitelists[offeringId].push(id);
    }

    // --------------------------------------------------------------------------------
    // PURCHASE LOGIC
    // --------------------------------------------------------------------------------

    // Primary purchase function
    function processPurchase(
        uint256 offeringId,
        address investor,
        uint256 usdcAmount,
        uint256 amountToIssue
    ) public {
        Offering storage off = offerings[offeringId];
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(off.exists, "Offering not found");
        require(!off.closed, "Offering is closed");
        require(block.timestamp >= off.openingTime, "Not open yet");
        require(block.timestamp <= off.closingTime, "Already closed");
        require(usdcAmount > 0, "Zero purchase");
        require(usdcAmount + off.raised <= off.cap, "Cap exceeded");
        require(usdcAmount >= off.minimumInvestment, "Below minimum investment");

        // 1. Check whitelists (if you want).
        require(_checkAllWhitelists(offeringId, investor, usdcAmount), "Not whitelisted");

        // 2. Transfer USDC from investor to escrow
        require(usdc.allowance(investor, address(this)) >= usdcAmount, "Not enough USDC allowance");
        bool success = usdc.transferFrom(investor, off.escrow, usdcAmount);
        require(success, "USDC transfer failed");

        // 3. Mint tokens
        IAkemonaSecurityToken(off.securityToken).mint(investor, amountToIssue);

        // 4. update
        off.raised += usdcAmount;
        // 5. store the purchase
        Purchase memory p = Purchase({
            investor: investor,
            investorId: 0, // if not using walletless
            paid: usdcAmount,
            received: amountToIssue,
            refunded: false,
            refundRequested: false,
            refundAllocated: false,
            requiresReconfirm: false,
            noWallet: false,
            offchain: false,
            offchainPurchaseId: 0,
            timestamp: block.timestamp,
            isClosed: false
        });
        offeringPurchases[offeringId].push(p);
        uint256 purchaseIndex = offeringPurchases[offeringId].length - 1;

        emit PurchaseEvent(offeringId, purchaseIndex, investor, usdcAmount, amountToIssue);
    }

    function processPurchasesOnBehalfOf(uint256 offeringId, address[] memory _addresses, uint256[] memory _amounts, uint256[] memory amountToIssue, bytes32[] memory _offchainInvestmentIds, uint256 _transactionId) external {        
        Offering storage off = offerings[offeringId];
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(off.transactionId == _transactionId, "Transaction ID mismatch");
        off.transactionId = off.transactionId + 1;

        require(!off.isDisbursed, "Offering is disbursed");
        require(block.timestamp > off.openingTime, "Offering openingTime is not yet passed.");

        for (uint256 i = 0; i < _addresses.length; i++) {

            //require(block.timestamp < closingTime, "Contract is past its closing time.");  // now a client-side check
  
            require(off.raised < off.cap, "Amount raised is over the cap");
            uint usdcAmount = _amounts[i];
            require(off.raised + usdcAmount <= off.cap, "Amount that would be raised is over the cap");

            require(_checkAllWhitelists(offeringId, _addresses[i], usdcAmount), "Not whitelisted");

            require (usdcAmount >= off.minimumInvestment, "USDC amount less than minimum investment");

            //uint256 amountToIssue = getNumTokensPerNumDollarsWithCredit(usdcAmount, _numDays[i]);
            IAkemonaSecurityToken(off.securityToken).mint(_addresses[i], amountToIssue[i]);

            off.raised = off.raised + usdcAmount;

            offeringPurchases[offeringId].push(Purchase({
                investor: _addresses[i], 
                investorId: "", 
                paid: usdcAmount, 
                received: amountToIssue[i], 
                refunded: false, 
                refundRequested: false, 
                refundAllocated: false, 
                requiresReconfirm: false, 
                noWallet: false, 
                offchain: true, 
                offchainPurchaseId: _offchainInvestmentIds[i],
                timestamp: block.timestamp,
                isClosed: false
            }));

            emit PurchaseEvent(offeringId, offeringPurchases[offeringId].length - 1, _addresses[i], usdcAmount, amountToIssue[i]);
        }
    }

    function processPurchases(uint256 offeringId, address[] memory _addresses, uint[] memory usdcAmount, uint256[] memory amountToIssue) external {
        for (uint256 i = 0; i < _addresses.length; i++) {
            if (usdc.allowance(_addresses[i], address(this)) > 0) {
                processPurchase(offeringId, _addresses[i], usdcAmount[i], amountToIssue[i]);
            }
        }
    }

    function _checkAllWhitelists(uint256 offeringId, address investor, uint256 amount) internal view returns (bool) {
        uint256[] memory wlIds = offeringToWhitelists[offeringId];
        if (wlIds.length == 0) {
            // no whitelists means no restriction
            return true;
        }
        for (uint256 i = 0; i < wlIds.length; i++) {
            WhitelistInfo storage wli = whitelists[wlIds[i]];
            bool authorized = IAkemonaWhitelist(wli.whitelistContract).isPurchaseAuthorized(investor, amount);
            if (authorized) {
                return true;
            }
        }
        return false;
    }

    function processMerkleNoWalletPurchases(uint256 offeringId, uint256 usdcAmount, uint256 _merkleInvestorCount, uint256 _merkleInvestmentCount) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.closed, "Offering closed");
        require(block.timestamp >= off.openingTime, "Not open yet");
        require(block.timestamp <= off.closingTime, "Already closed");
        require(usdcAmount + off.raised <= off.cap, "Cap exceeded");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        IAkemonaSecurityToken(off.securityToken).mint(address(this), usdcAmount);
        off.raised += usdcAmount;
        off.merkleInvestorCount = _merkleInvestorCount;
        off.merkleInvestmentCount = _merkleInvestmentCount;
    }

    function processNoWalletPurchase(
        uint256 offeringId,
        bytes32 investorId,
        uint256 usdcAmount,
        bool offchain
    ) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.closed, "Offering closed");
        require(block.timestamp >= off.openingTime, "Not open yet");
        require(block.timestamp <= off.closingTime, "Already closed");
        require(usdcAmount + off.raised <= off.cap, "Cap exceeded");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        IAkemonaSecurityToken(off.securityToken).mint(address(this), usdcAmount);

        off.raised += usdcAmount;
        Purchase memory p = Purchase({
            investor: address(0),
            investorId: investorId,
            paid: usdcAmount,
            received: usdcAmount,
            refunded: false,
            refundRequested: false,
            refundAllocated: false,
            requiresReconfirm: false,
            noWallet: true,
            offchain: offchain,
            offchainPurchaseId: 0,
            timestamp: block.timestamp,
            isClosed: false
        });
        offeringPurchases[offeringId].push(p);
        emit PurchaseEvent(offeringId, offeringPurchases[offeringId].length - 1, address(0), usdcAmount, usdcAmount);
    }

    function convertNoWalletToWallet(uint256 offeringId, uint256 purchaseIndex, address newWallet) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.closed, "Offering closed");

        Purchase storage p = offeringPurchases[offeringId][purchaseIndex];
        require(p.noWallet, "Purchase not noWallet");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        p.investor = newWallet;
        p.noWallet = false;

        // Transfer the tokens from the protocol to newWallet
        IERC20(off.securityToken).transfer(newWallet, p.received);

        emit ConvertNoWalletEvent(offeringId, purchaseIndex, newWallet);
    }


    // --------------------------------------------------------------------------------
    // REFUND / RECONFIRM / ROLLING CLOSE / etc.
    // --------------------------------------------------------------------------------

    // Check if an offering is closed
    function isClosed(uint256 offeringId) public view returns (bool) {
        return offerings[offeringId].closed;
    }

    // close offering
    function closeOffering(uint256 offeringId) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!off.closed, "Already closed");
        off.closed = true;

        // Mark all purchases as closed if not refunded
        Purchase[] storage pArr = offeringPurchases[offeringId];
        for (uint256 i = 0; i < pArr.length; i++) {
            if (!pArr[i].refunded && !pArr[i].isClosed) {
                pArr[i].isClosed = true;
            }
        }
        emit OfferingClosedEvent(offeringId);
    }

    function closePurchases(uint256 offeringId, uint256[] memory purchaseIndices) public {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        for (uint i = 0; i < purchaseIndices.length; i++) {
            offeringPurchases[offeringId][purchaseIndices[i]].isClosed = true;
            emit PurchaseClosedEvent(offeringId, purchaseIndices[i], offeringPurchases[offeringId][purchaseIndices[i]].investor, offeringPurchases[offeringId][purchaseIndices[i]].paid, offeringPurchases[offeringId][purchaseIndices[i]].received);
        }
    }

    // rollingClose
    function rollingClose(uint256 offeringId, uint256 beforeDateTime) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.closed, "Offering closed");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!off.isDisbursed, "Already disbursed");

        Purchase[] storage pArr = offeringPurchases[offeringId];
        for (uint256 i = 0; i < pArr.length; i++) {
            if (pArr[i].timestamp < beforeDateTime && !pArr[i].refunded && !pArr[i].refundRequested && !pArr[i].isClosed) {
                pArr[i].isClosed = true;
                emit PurchaseClosedEvent(offeringId, i, pArr[i].investor, pArr[i].paid, pArr[i].received);
            }
        }
        emit RollingClosedEvent(offeringId, block.timestamp);
    }

    // requestRefund
    function requestRefund(uint256 offeringId, uint256 purchaseIndex) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.isDisbursed, "Already disbursed");
        require(!off.closed, "Offering closed => no new refunds? (If that is your logic.)");

        Purchase storage p = offeringPurchases[offeringId][purchaseIndex];
        require(!p.refunded, "Already refunded");
        require(!p.refundRequested, "Already requested");
        require(!p.isClosed, "Purchase is closed, cannot refund");
        require(p.investor == msg.sender || msg.sender == off.owner, "Not your purchase");

        p.refundRequested = true;
        offeringRefundRequests[offeringId].push(RefundRequest(purchaseIndex, false));

        emit RefundRequestedEvent(offeringId, purchaseIndex, msg.sender, p.paid, p.received);
    }

    // maxLength used as a hack to avoid unestimatable gas price error
    function requestRefundAll(uint256 offeringId, uint256 maxLength) external {
        Offering storage off = offerings[offeringId];
        Purchase[] storage pArr = offeringPurchases[offeringId];
        require(msg.sender == off.owner, "Not the offering owner");
        for (uint i = 0; i < pArr.length && i < maxLength; i++) {
            if (!pArr[i].refunded && !pArr[i].refundRequested && !pArr[i].isClosed) {
                pArr[i].refundRequested = true;
                offeringRefundRequests[offeringId].push(RefundRequest(i, false));

                emit RefundRequestedEvent(offeringId, i, pArr[i].investor, pArr[i].paid, pArr[i].received);
            }
        }

    }

    function processMerkleNoWalletRefunds(uint256 offeringId, uint256 usdcAmount, uint256 _merkleInvestorCount, uint256 _merkleInvestmentCount) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.closed, "Offering closed");
        require(block.timestamp >= off.openingTime, "Not open yet");
        require(block.timestamp <= off.closingTime, "Already closed");
        require(usdcAmount + off.raised <= off.cap, "Cap exceeded");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        IAkemonaSecurityToken(off.securityToken).mint(address(this), usdcAmount);
        off.raised -= usdcAmount;
        off.merkleInvestorCount = _merkleInvestorCount;
        off.merkleInvestmentCount = _merkleInvestmentCount;
    }

    // processRefund
    function processRefund(uint256 offeringId, uint256 purchaseIndex) external {
        // This is a simplified version. If directRefund is false, etc. replicate your logic
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(!off.isDisbursed, "Already disbursed");
        require(!off.directRefund, "Offering is direct refund");
        Purchase storage p = offeringPurchases[offeringId][purchaseIndex];
        require(p.refundRequested, "No refund requested");
        require(!p.refunded, "Already refunded");

        // Transfer USDC from escrow back to the investor (if escrow has allowance).
        uint256 usdcAuthorized = usdc.allowance(off.escrow, address(this));
        require(usdcAuthorized >= p.paid, "Not enough USDC allowance from escrow");
        require(usdc.balanceOf(off.escrow) >= p.paid, "Not enough USDC in escrow");

        bool success = usdc.transferFrom(off.escrow, p.investor, p.paid);
        require(success, "USDC refund transfer failed");

        // burn tokens from investor
        IAkemonaSecurityToken(off.securityToken).burnFrom(p.investor, p.received);

        p.refunded = true;
        off.raised -= p.paid;

        emit RefundProcessedEvent(offeringId, purchaseIndex, p.investor, p.paid, p.received);
    }

    function processManualRefund(uint256 offeringId, uint256 purchaseIndex) external {
        Offering storage off = offerings[offeringId];
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!off.isDisbursed, "Contract is already disbursed");

        Purchase storage p = offeringPurchases[offeringId][purchaseIndex];

        require(!p.refunded, "This purchase is already marked as refunded");

        require(p.refundRequested, "This purchase is not marked as refundRequested");

        if (!p.noWallet) {
            // Burn tokens as the refund has been processed offchain
            IAkemonaSecurityToken(off.securityToken).burnFrom(p.investor, p.received);
        }

        p.refunded = true;

        off.raised -= p.paid;

        emit RefundProcessedEvent(offeringId, purchaseIndex, p.investor, p.paid, p.received);
    }

    function getPurchasesPendingRefund(uint256 offeringId) external view returns (bool[] memory) {
        Offering storage off = offerings[offeringId];
        require(!off.isDisbursed, "Contract is already disbursed");

        uint256 usdcAuthorized = usdc.allowance(off.escrow, address(this));
        require(usdcAuthorized > 0, "Contract does not have authorization to refund USDC.");

        uint256 usdcAvailable = usdc.balanceOf(off.escrow);
        require(usdcAvailable > 0, "Insufficient funds.");

        if (usdcAuthorized < usdcAvailable) {
            usdcAvailable = usdcAuthorized;
        }

        bool continueProcessing = true;

        bool[] memory pendingRefunds = new bool[](offeringPurchases[offeringId].length);

        for (uint i = 0; i < offeringRefundRequests[offeringId].length; i++) {
            if (continueProcessing) {
                Purchase storage currentPurchase = offeringPurchases[offeringId][offeringRefundRequests[offeringId][i].purchaseIndex];
                
                if (!currentPurchase.refunded && currentPurchase.refundRequested && !currentPurchase.offchain) {
                    if (usdcAvailable >= currentPurchase.paid) {

                        if (currentPurchase.refundAllocated) {
                            usdcAvailable = usdcAvailable - currentPurchase.paid;
                        } else {
                            // Allocate the refund
                            pendingRefunds[offeringRefundRequests[offeringId][i].purchaseIndex] = true;
                            usdcAvailable = usdcAvailable - currentPurchase.paid;
                        }

                    } else {
                        // Insufficient funds to process refund
                        continueProcessing = false;
                    }
                }
            }
        }

        return pendingRefunds;
    }

    function allocateRefunds(uint256 offeringId, uint256[] memory purchaseIndices) external {
        Offering storage off = offerings[offeringId];
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        for (uint i = 0; i < purchaseIndices.length; i++) {
            Purchase storage currentPurchase = offeringPurchases[offeringId][purchaseIndices[i]];

            require(!currentPurchase.offchain, "One or more purchaseIndices was an offchain purchase and cannot be allocated");

            if (!currentPurchase.refunded && currentPurchase.refundRequested) {
                currentPurchase.refundAllocated = true;
                emit RefundAllocatedEvent(offeringId, purchaseIndices[i], currentPurchase.investor, currentPurchase.paid, currentPurchase.received);
            }
        }
    }

    // In case of USDC sent to this contract by mistake
    function moveSentTokens(address _to) public {
        require(hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        uint usdcAmount = usdc.balanceOf(address(this));
        require(usdc.transfer(_to, usdcAmount), "USDC transfer failed.");
    }

    function reconfirmPurchase(uint256 offeringId, uint256 i) external {
        Purchase storage purchase = offeringPurchases[offeringId][i];
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");
    
        if (purchase.investor == msg.sender && !purchase.refunded && !purchase.refundRequested) {
            purchase.requiresReconfirm = false;
            emit ReconfirmEvent(offeringId, i, purchase.investor, purchase.paid, purchase.received);
        }

    }

    function reconfirmPurchaseOnBehalfOf(uint256 offeringId, uint256 i) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        Purchase storage purchase = offeringPurchases[offeringId][i];
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");
    
        if (!purchase.refunded && !purchase.refundRequested) {
            purchase.requiresReconfirm = false;
            emit ReconfirmEvent(offeringId, i, purchase.investor, purchase.paid, purchase.received);
        }

    }

    function requireReconfirm(uint256 offeringId, uint256[] memory purchaseIndices) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");

        for (uint i = 0; i < purchaseIndices.length; i++) {
            offeringPurchases[offeringId][purchaseIndices[i]].requiresReconfirm = true;
        }
    }

    function requireReconfirm(uint256 offeringId) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");

        for (uint i = 0; i < offeringPurchases[offeringId].length; i++) {
            if (!offeringPurchases[offeringId][i].refunded && !offeringPurchases[offeringId][i].refundRequested && !offeringPurchases[offeringId][i].isClosed) {
                offeringPurchases[offeringId][i].requiresReconfirm = true;
            }
        }
    }
    function processReconfirm(uint256 offeringId, uint256[] memory purchaseIndices) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");

        for (uint i = 0; i < purchaseIndices.length; i++) {
            if (offeringPurchases[offeringId][purchaseIndices[i]].requiresReconfirm && !offeringPurchases[offeringId][purchaseIndices[i]].refunded && !offeringPurchases[offeringId][purchaseIndices[i]].refundRequested) {
                offeringPurchases[offeringId][purchaseIndices[i]].refundRequested = true;
                offeringRefundRequests[offeringId].push(RefundRequest(purchaseIndices[i], true));
            }
        }
    }

    function processReconfirm(uint256 offeringId) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");

        for (uint i = 0; i < offeringPurchases[offeringId].length; i++) {
            if (offeringPurchases[offeringId][i].requiresReconfirm && !offeringPurchases[offeringId][i].refunded && !offeringPurchases[offeringId][i].refundRequested) {
                offeringPurchases[offeringId][i].refundRequested = true;
                offeringRefundRequests[offeringId].push(RefundRequest(i, true));
            }
        }
    }

    function requestRefundForPurchases(uint256 offeringId, uint256[] memory purchaseIndices) external {
        require(!offerings[offeringId].closed, "Offering is closed");
        for (uint i = 0; i < purchaseIndices.length; i++) {
            requestRefundForPurchase(offeringId, purchaseIndices[i]);
        }
    }

    function requestRefundForPurchase(uint256 offeringId, uint256 i) public {
        require(!offerings[offeringId].closed, "Offering is closed");

        bool refundProcessed = false;
    
        if (offeringPurchases[offeringId][i].investor == msg.sender && !offeringPurchases[offeringId][i].refunded && !offeringPurchases[offeringId][i].refundRequested && !offeringPurchases[offeringId][i].isClosed) {
            offeringPurchases[offeringId][i].refundRequested = true;
            offeringRefundRequests[offeringId].push(RefundRequest(i, false));
            refundProcessed = true;

            emit RefundRequestedEvent(offeringId, i, offeringPurchases[offeringId][i].investor, offeringPurchases[offeringId][i].paid, offeringPurchases[offeringId][i].received);
        }

        require(refundProcessed, "No refund was processed");
    }

    
    function requestRefundForPurchaseOnBehalfOf(uint256 offeringId, uint256 i) external {
        require(msg.sender == offerings[offeringId].owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        require(!offerings[offeringId].isDisbursed, "Offering is disbursed.");

        bool refundProcessed = false;
    
        if (!offeringPurchases[offeringId][i].refunded && !offeringPurchases[offeringId][i].refundRequested && !offeringPurchases[offeringId][i].isClosed) {
            offeringPurchases[offeringId][i].refundRequested = true;
            offeringRefundRequests[offeringId].push(RefundRequest(i, false));
            refundProcessed = true;

            emit RefundRequestedEvent(offeringId, i, offeringPurchases[offeringId][i].investor, offeringPurchases[offeringId][i].paid, offeringPurchases[offeringId][i].received);
        }

        require(refundProcessed, "No refund was processed");
    }

    // --------------------------------------------------------------------------------
    // DISBURSEMENT / isDisbursed logic
    // --------------------------------------------------------------------------------
    function setDisbursed(uint256 offeringId, bool _isDisbursed, uint256 _disbursementTime) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");
        off.isDisbursed = _isDisbursed;
        off.disbursementTime = _disbursementTime;
    }



    // --------------------------------------------------------------------------------
    // RECOVER LOST TOKENS or ADMIN FUNCTIONS
    // --------------------------------------------------------------------------------
    function recoverLostTokens(uint256 offeringId, uint256 purchaseIndex, address newAddress) external {
        Offering storage off = offerings[offeringId];
        require(off.exists, "No offering");
        require(msg.sender == off.owner || hasRole(PROTOCOL_ADMIN_ROLE, msg.sender), "Not owner/admin");

        Purchase storage p = offeringPurchases[offeringId][purchaseIndex];
        require(!p.refunded, "Already refunded");
        require(p.investor != address(0), "No investor address?");

        // Transfer tokens from old address to new
        IAkemonaSecurityToken(off.securityToken).transferFrom(p.investor, newAddress, p.received);
        p.investor = newAddress;
        
        emit RecoverTokenEvent(offeringId, purchaseIndex, p.investor, newAddress);
    }

    // --------------------------------------------------------------------------------
    // isTransferAuthorized - called by the token's _beforeTokenTransfer hook
    // --------------------------------------------------------------------------------
    function isTransferAuthorized(
        uint256 offeringId,
        address from,
        address to,
        uint256 value
    ) external view override returns (bool) {
        // 1) check if offering is disbursed
        Offering storage off = offerings[offeringId];
        if (!off.isDisbursed) {
            return false;
        }
        // 2) check whitelists
        uint256[] memory wlIds = offeringToWhitelists[offeringId];
        for (uint256 i = 0; i < wlIds.length; i++) {
            WhitelistInfo storage wli = whitelists[wlIds[i]];
            bool authorized = IAkemonaWhitelist(wli.whitelistContract).isTransferAuthorized(offeringId, from, to, value);
            if (authorized) {
                return true;
            }
        }
        // if none whitelists says yes, we say false
        return false;
    }

    function isTransferAuthorizedMerkle(
        uint256 offeringId,
        address from,
        address to,
        bytes32[] calldata fromProof,
        bytes32[] calldata toProof
    ) external view override returns (bool) {
        // 1) check if offering is disbursed
        Offering storage off = offerings[offeringId];
        if (!off.isDisbursed) {
            return false;
        }
        // 2) check whitelists
        uint256[] memory wlIds = offeringToWhitelists[offeringId];
        for (uint256 i = 0; i < wlIds.length; i++) {
            WhitelistInfo storage wli = whitelists[wlIds[i]];
            bool authorized = IAkemonaWhitelist(wli.whitelistContract).isTransferAuthorizedMerkle(offeringId, from, to, fromProof, toProof);
            if (authorized) {
                return true;
            }
        }
        // if none whitelists says yes, we say false
        return false;
    }

    function getOfferingOwnerAddress(
        uint256 offeringId
    ) external view override returns (address) {
        return offerings[offeringId].owner;
    }

    function getOfferingIsDisbursed(
        uint256 offeringId
    ) external view override returns (bool) {
        return offerings[offeringId].isDisbursed;
    }

    function getOfferingDisbursementTime(
        uint256 offeringId
    ) external view override returns (uint256) {
        return offerings[offeringId].disbursementTime;
    }

}
