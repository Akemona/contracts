pragma solidity ^0.8.19;

import "./AkemonaWhitelist.sol";
import "./AkemonaSecurityToken.sol";   //#circular
import "./Usdc.sol";
import "./IAkemonaProtocol.sol";
import "./IAkemonaDisbursement.sol";

/*
1. Administrator sets up partial or full redemption of securities
Contract creation ("AkemonaDisbursement")

2. Investor makes an onchain request for seeking disbursement of funds


Paying agent who is the owner of the disbursement wallet approves the payment to investors
Administrator allocates the disbursement amount to investors
Investor pulls the onchain funds into their own wallet

*/

contract AkemonaDisbursement is IAkemonaDisbursement {

    address public owner;

    IAkemonaProtocol protocol;
    AkemonaSecurityToken token;
    Usdc usdc;
    address[] disbursementWallets;

    bool _isClosed = true;
    uint256 offeringId;
    uint256 _amountDisbursedPerToken;
    uint256 _totalDisbursementAmount;
    uint256 _openingTime;
    bool _isFinal;

    uint256 serialNumber;

    uint256 public currentRound;

    uint256 public merkleRootVersion;
    bytes32 public currentMerkleRoot;


    struct RedemptionRequest {
        bool onBehalfOf;
        bool redemptionAllocated;
        bool redemptionClaimed;
        uint256 allocatedAmount;
        uint256 burnAmount;
        uint256 disbursementWalletIndex;
        bool offchainRedemption;
        address wallet;
        bytes32 investorId;
        bool exists; // ignore this, it is used as a solidity hack to check for existence
        uint256 round;
    }

    // Maps investorId to RedemptionRequest
    mapping(bytes32 => RedemptionRequest) public walletlessRedemptionRequest;
    // Maps wallet address to RedemptionRequest
    mapping(address => RedemptionRequest) public walletRedemptionRequest;


    event DisbursementSetupEvent(uint256 openingTime, bool isFinal, uint256 serialNumber, uint256 amountDisbursedPerToken, uint256 round);
    event RedemptionRequestEvent(bool onBehalfOf, bool offchainRedemption, uint256 serialNumber, address wallet, bytes32 investorId, uint256 round);
    event DisbursementAllocatedEvent(address wallet, bytes32 investorId, uint256 allocatedAmount, uint256 burnAmount, uint256 disbursementWalletIndex, bool offchainRedemption, uint256 serialNumber, uint256 round);
    event DisbursementRedeemedEvent(address wallet, bytes32 investorId, uint256 allocatedAmount, uint256 burnAmount, uint256 disbursementWalletIndex, bool offchainRedemption, uint256 serialNumber, uint256 round);
    event DisbursementClosedEvent(uint256 serialNumber, uint256 round);

    constructor(
            address _protocol,
            uint256 _offeringId,
            address _crowdsaleToken,
            address[] memory _disbursementWallets,
            address payable _usdc,
            uint256 _serialNumber
            ) public {

        currentRound = 0;

        owner = msg.sender;
        offeringId = _offeringId;
        protocol = IAkemonaProtocol(_protocol);
        token = AkemonaSecurityToken(_crowdsaleToken);
        usdc = Usdc(_usdc);
        disbursementWallets = _disbursementWallets;
        serialNumber = _serialNumber;

       // require (_crowdsale == address(token.crowdsale()), "E0");

    }
    
    modifier restricted() {
        require(msg.sender == owner, "E3");
        _;
    }

    function setMerkle(uint256 _version, bytes32 _root) external restricted {
        merkleRootVersion = _version;
        currentMerkleRoot = _root;
    }

    function isOpen() public view override returns (bool) {
        return _openingTime > 0 && isClosed() == false && block.timestamp > _openingTime;
    }

    function isClosed() public view returns (bool) {
        return _isClosed;
    }

    function close() public restricted {
        _isClosed = true;
        
        emit DisbursementClosedEvent(getSerialNumber(), currentRound);
    }

    /*

    1. Multiple whitelists per token (add/remove)
    2. Permissioned whitelist
    3. Central tracker for whitelist


    TODO: add amountDisbursedPerToken to event

    */

    // Wallets must be funded prior to calling this function
    function setupDisbursement (
        uint256 amountDisbursedPerToken,
        uint256 openingTime,
        bool isFinal
        ) public restricted {

        require(_isClosed == true, "The active round must bee closed before this can be called.");
        
        //require ((_amountDisbursedPerToken / 1e6) * token.totalSupplyNonWalletless() <= _totalDisbursementAmount, "Not enough disbursementAmount to cover token supply");

        currentRound = currentRound + 1;
        _isClosed = false;

        _amountDisbursedPerToken = amountDisbursedPerToken;
        //_totalDisbursementAmount = totalDisbursementAmount;
        _openingTime = openingTime;
        _isFinal = isFinal;

        uint256 _fundedTotal = 0;

        for (uint256 i = 0; i < disbursementWallets.length; i++) {
            _fundedTotal = _fundedTotal + usdc.balanceOf(disbursementWallets[i]);
        }

        require (_fundedTotal >= (amountDisbursedPerToken * (token.totalSupplyNonWalletless() / 1e6)), "Not enough funds in wallets to cover disbursementAmount");

        emit DisbursementSetupEvent(openingTime, isFinal, getSerialNumber(), amountDisbursedPerToken, currentRound);
    }

    function getSerialNumber() public view returns (uint256) {
        return serialNumber;
    }

    function requestRedemption(bool offchainRedemption) public {
        require(isOpen(), "disbursement is not open");
        //for (uint256 i = 0; i < addresses.length; i++) {

        require(token.balanceOf(msg.sender) > 0, "no tokens found for this wallet");

        require(walletRedemptionRequest[msg.sender].exists == false || walletRedemptionRequest[msg.sender].round < currentRound, "request already exists for this round");
        //require
        //require(crowdsale.getInvestorForPurchaseIndex(purchaseIndexes[i]) == msg.sender, "must request from the investor address");


        walletRedemptionRequest[msg.sender] = RedemptionRequest(false, false, false, 0, 0, 0, offchainRedemption, msg.sender, 0, true, currentRound);

        emit RedemptionRequestEvent(false, offchainRedemption, getSerialNumber(), msg.sender, 0, currentRound);

        //}
    }

    function requestRedemptionOnBehalfOfWallet(address[] memory wallets, bool[] memory offchainRedemption) public restricted {
        for (uint256 i = 0; i < wallets.length; i++) {
            require(walletRedemptionRequest[wallets[i]].exists == false || walletRedemptionRequest[wallets[i]].round < currentRound, "request already exists for this round");
            walletRedemptionRequest[wallets[i]] = RedemptionRequest(true, false, false, 0, 0, 0, offchainRedemption[i], msg.sender, 0, true, currentRound);
            emit RedemptionRequestEvent(true, offchainRedemption[i], getSerialNumber(), wallets[i], 0, currentRound);
        }
    }

    function requestRedemptionOnBehalfOf(bytes32[] memory _investorIds) public restricted {
        for (uint256 i = 0; i < _investorIds.length; i++) {
            require(walletlessRedemptionRequest[_investorIds[i]].exists == false || walletlessRedemptionRequest[_investorIds[i]].round < currentRound, "request already exists");
            walletlessRedemptionRequest[_investorIds[i]] = RedemptionRequest(true, false, false, 0, 0, 0, true, address(0), _investorIds[i], true, currentRound);
            emit RedemptionRequestEvent(true, true, getSerialNumber(), address(0), _investorIds[i], currentRound);
        }
    }
    
    // emits DisbursementAllocatedEvent
    // in the case of on-chain disbursements, the wallet index indicates which disbursementWallet to use (starting with 0)

    function allocateDisbursementsByInvestorId(bytes32[] memory _investorIds, uint256[] memory _amounts, uint256[] memory _walletIndexes) public restricted {

        for (uint256 i = 0; i < _investorIds.length; i++) {
            require(walletlessRedemptionRequest[_investorIds[i]].exists != false, "request does not exist");

            //address addr = crowdsale.getInvestorForPurchaseIndex(_investorIds[i]);

            //require(token.balanceOf(addr) * (_amountDisbursedPerToken / 1e6) <= _amounts[i], "too much is being allocated for this investor");

            require(walletlessRedemptionRequest[_investorIds[i]].redemptionClaimed == false, "request has already been redeemed");

            walletlessRedemptionRequest[_investorIds[i]].allocatedAmount = _amounts[i];
            walletlessRedemptionRequest[_investorIds[i]].disbursementWalletIndex = _walletIndexes[i];
            walletlessRedemptionRequest[_investorIds[i]].redemptionAllocated = true;

            emit DisbursementAllocatedEvent(address(0), _investorIds[i], _amounts[i], 0, _walletIndexes[i], walletlessRedemptionRequest[_investorIds[i]].offchainRedemption, getSerialNumber(), currentRound);
        }

    }

    function allocateDisbursementsByWallet(address[] memory _wallets, uint256[] memory _amounts, uint256[] memory _burnAmounts, uint256[] memory _walletIndexes) public restricted {

        for (uint256 i = 0; i < _wallets.length; i++) {
            require(walletRedemptionRequest[_wallets[i]].exists != false, "request does not exist");

            //address addr = crowdsale.getInvestorForPurchaseIndex(_investorIds[i]);

            //require(token.balanceOf(addr) * (_amountDisbursedPerToken / 1e6) <= _amounts[i], "too much is being allocated for this investor");

            require(walletRedemptionRequest[_wallets[i]].redemptionClaimed == false, "request has already been redeemed");

            require(walletRedemptionRequest[_wallets[i]].offchainRedemption == false || _amounts[i] == 0, "cannot allocate non-zero amount to offchain redemption request");

            walletRedemptionRequest[_wallets[i]].allocatedAmount = _amounts[i];
            walletRedemptionRequest[_wallets[i]].disbursementWalletIndex = _walletIndexes[i];
            walletRedemptionRequest[_wallets[i]].redemptionAllocated = true;
            walletRedemptionRequest[_wallets[i]].burnAmount = _burnAmounts[i];

            emit DisbursementAllocatedEvent(_wallets[i], 0, _amounts[i], _burnAmounts[i], _walletIndexes[i], walletRedemptionRequest[_wallets[i]].offchainRedemption, getSerialNumber(), currentRound);
        }

    }
/*
    function debugAllowance() public view returns (uint256) {
        uint256 allowance = usdc.allowance(disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex], address(this));
        return allowance;
    }

    function debugAllocated() public view returns (uint256) {
        return walletRedemptionRequest[msg.sender].allocatedAmount;
    }

    function debugIndex() public view returns (uint256) {
        return disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex
    }
*/

    function verifyCalldata(
        bytes32[] calldata proof,
        bytes32 root,
        bytes32 leaf
    ) internal pure returns (bool) {
        return processProofCalldata(proof, leaf) == root;
    }

    function processProofCalldata(
        bytes32[] calldata proof,
        bytes32 leaf
    ) internal pure returns (bytes32) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = _hashPair(computedHash, proof[i]);
        }
        return computedHash;
    }

    function _hashPair(bytes32 a, bytes32 b)
        private
        pure
        returns(bytes32)
    {
        return a < b ? _efficientHash(a, b) : _efficientHash(b, a);
    }

    function _efficientHash(bytes32 a, bytes32 b)
        private
        pure
        returns (bytes32 value)
    {
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            value := keccak256(0x00, 0x40)
        }
    }

    function redeemDisbursementMerkle(address walletAddress, uint256 allocatedAmount, bytes32[] calldata proof) external {
        require(isOpen(), "disbursement is not open");
        
        require(walletRedemptionRequest[msg.sender].offchainRedemption == false, "disbursement is designated as offchain");
        uint256 allowance = usdc.allowance(disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex], address(this));

        require(allowance >= allocatedAmount, "insufficient approval in wallet");
        require(walletRedemptionRequest[msg.sender].redemptionClaimed == false, "disbursement has already been redeemed");

        require(verifyCalldata(proof, currentMerkleRoot, keccak256(abi.encodePacked(walletAddress, allocatedAmount))), "E");

        walletRedemptionRequest[msg.sender].allocatedAmount = allocatedAmount;

        // Ensure this flag gets set before the USDC transfer
        walletRedemptionRequest[msg.sender].redemptionClaimed = true;
        require(usdc.transferFrom(disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex], msg.sender, walletRedemptionRequest[msg.sender].allocatedAmount), "USDC transfer failed.");

        if (walletRedemptionRequest[msg.sender].burnAmount == 0) {
            if (_isFinal) {
                token.burnFrom(msg.sender, token.balanceOf(msg.sender));
            }
        } else {
            token.burnFrom(msg.sender, walletRedemptionRequest[msg.sender].burnAmount);
        }

        emit DisbursementRedeemedEvent(msg.sender, 0, walletRedemptionRequest[msg.sender].allocatedAmount, walletRedemptionRequest[msg.sender].burnAmount, walletRedemptionRequest[msg.sender].disbursementWalletIndex,walletRedemptionRequest[msg.sender].offchainRedemption, getSerialNumber(), currentRound);
    }

    function redeemDisbursement() external {
        require(isOpen(), "disbursement is not open");
        //for (uint256 i = 0; i < purchaseIndexes.length; i++) {
            //address addr = crowdsale.getInvestorForPurchaseIndex(purchaseIndexes[i]);

            //require(addr == msg.sender, "must redeem from the investor address");

            require(walletRedemptionRequest[msg.sender].redemptionAllocated == true, "disbursement is not allocated");
            require(walletRedemptionRequest[msg.sender].offchainRedemption == false, "disbursement is designated as offchain");

            uint256 allowance = usdc.allowance(disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex], address(this));

            require(allowance >= walletRedemptionRequest[msg.sender].allocatedAmount, "insufficient approval in wallet");
            require(walletRedemptionRequest[msg.sender].redemptionClaimed == false, "disbursement has already been redeemed");

            // Ensure this flag gets set before the USDC transfer
            walletRedemptionRequest[msg.sender].redemptionClaimed = true;

            require(usdc.transferFrom(disbursementWallets[walletRedemptionRequest[msg.sender].disbursementWalletIndex], msg.sender, walletRedemptionRequest[msg.sender].allocatedAmount), "USDC transfer failed.");

            if (walletRedemptionRequest[msg.sender].burnAmount == 0) {
                if (_isFinal) {
                    token.burnFrom(msg.sender, token.balanceOf(msg.sender));
                }
            } else {
                token.burnFrom(msg.sender, walletRedemptionRequest[msg.sender].burnAmount);
            }


            emit DisbursementRedeemedEvent(msg.sender, 0, walletRedemptionRequest[msg.sender].allocatedAmount, walletRedemptionRequest[msg.sender].burnAmount, walletRedemptionRequest[msg.sender].disbursementWalletIndex,walletRedemptionRequest[msg.sender].offchainRedemption, getSerialNumber(), currentRound);
        //}
    }

    function redeemDisbursementOnBehalfOfWallet(address[] memory _wallets) public restricted {
        for (uint256 i = 0; i < _wallets.length; i++) {
            require(walletRedemptionRequest[_wallets[i]].redemptionAllocated == true, "disbursement is not allocated");
            require(walletRedemptionRequest[_wallets[i]].redemptionClaimed == false, "disbursement has already been redeemed");

            walletRedemptionRequest[_wallets[i]].redemptionClaimed = true;

            if (walletRedemptionRequest[_wallets[i]].offchainRedemption == false) {
                require(usdc.transferFrom(disbursementWallets[walletRedemptionRequest[_wallets[i]].disbursementWalletIndex], _wallets[i], walletRedemptionRequest[_wallets[i]].allocatedAmount), "USDC transfer failed.");
            }

            if (walletRedemptionRequest[_wallets[i]].burnAmount == 0) {
                if (_isFinal) {
                    token.burnFrom(_wallets[i], token.balanceOf(_wallets[i]));
                }
            } else {
                token.burnFrom(_wallets[i], walletRedemptionRequest[_wallets[i]].burnAmount);
            }

    
            emit DisbursementRedeemedEvent(_wallets[i], 0, walletRedemptionRequest[_wallets[i]].allocatedAmount, walletRedemptionRequest[_wallets[i]].burnAmount, walletRedemptionRequest[_wallets[i]].disbursementWalletIndex, walletRedemptionRequest[_wallets[i]].offchainRedemption, getSerialNumber(), currentRound);
        }
    }


    function redeemDisbursementsOffchain(bytes32[] memory _investorIds) public restricted {
        require(isOpen(), "disbursement is not open");

        for (uint256 i = 0; i < _investorIds.length; i++) {
            require(walletlessRedemptionRequest[_investorIds[i]].redemptionAllocated == true, "disbursement is not allocated");
            require(walletlessRedemptionRequest[_investorIds[i]].offchainRedemption == true, "disbursement is not designated as offchain");
            require(walletlessRedemptionRequest[_investorIds[i]].redemptionClaimed == false, "disbursement has already been redeemed");

            walletlessRedemptionRequest[_investorIds[i]].redemptionClaimed = true;

            //address addr = crowdsale.getInvestorForPurchaseIndex(_investorIds[i]);

            //if (_isFinal) {
            //    token.burnFromAdmin(addr, token.balanceOf(addr));
            //}

    
            emit DisbursementRedeemedEvent(address(0), _investorIds[i], walletlessRedemptionRequest[_investorIds[i]].allocatedAmount, walletlessRedemptionRequest[_investorIds[i]].burnAmount, walletlessRedemptionRequest[_investorIds[i]].disbursementWalletIndex, walletlessRedemptionRequest[_investorIds[i]].offchainRedemption, getSerialNumber(), currentRound);
        }
/*
        for (uint256 i = 0; i < _wallets.length; i++) {
            require(walletRedemptionRequest[_wallets[i]].redemptionAllocated == true, "disbursement is not allocated");
            require(walletRedemptionRequest[_wallets[i]].offchainRedemption == true, "disbursement is not designated as offchain");
            require(walletRedemptionRequest[_wallets[i]].redemptionClaimed == false, "disbursement has already been redeemed");

            walletRedemptionRequest[_wallets[i]].redemptionClaimed = true;

            if (_burnAmounts[i] == 0) {
                if (_isFinal) {
                    token.burnFromAdmin(_wallets[i], token.balanceOf(_wallets[i]));
                }
            } else {
                token.burnFromAdmin(_wallets[i], _burnAmounts[i]);
            }

    
            emit DisbursementRedeemedEvent(_wallets[i], 0, walletRedemptionRequest[_wallets[i]].allocatedAmount, _burnAmounts[i], walletRedemptionRequest[_wallets[i]].disbursementWalletIndex, walletRedemptionRequest[_wallets[i]].offchainRedemption, getSerialNumber(), currentRound);
        }*/
    }

}