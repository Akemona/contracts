pragma solidity ^0.8.17;


import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
//import "../node_modules/@erc3643org/erc-3643/contracts/compliance/modular/IModularCompliance.sol";
//import "../node_modules/@erc3643org/erc-3643/contracts/registry/interface/IIdentityRegistry.sol";
//import "../node_modules/@onchain-id/solidity/contracts/interface/IIdentity.sol";


import "./IAkemonaProtocol.sol";      //#circular
import "./AkemonaWhitelist.sol";        
import "./AkemonaDisbursement.sol";

import "./IAkemonaSecurityToken.sol";

/**
 * @title AkemonaSecurityToken
 * @dev Very simple ERC20 Token that can be minted.
 * It is meant to be used in an Akemona protocol contract.
 */
contract AkemonaSecurityToken is ERC20PresetMinterPauser, IAkemonaSecurityToken {

    IAkemonaProtocol public protocol;

    AkemonaDisbursement public disbursement;
    bool _disbursementSet;
    uint256 offeringId;


    address internal _tokenOnchainID;

    mapping(address => bool) internal _frozen;
    mapping(address => uint256) internal _frozenTokens;

    IIdentityRegistry internal _tokenIdentityRegistry;
    IModularCompliance internal _tokenCompliance;
    
    string internal constant TOKEN_VERSION = "1.0.0";

    bytes32 public constant AGENT_ROLE = keccak256("AGENT_ROLE");

    string private _name;
    string private _symbol;

    function name() public view override(ERC20, IAkemonaSecurityToken) returns (string memory) {
        return _name;
    }

    function symbol() public view override(ERC20, IAkemonaSecurityToken) returns (string memory) {
        return _symbol;
    }

    // TODO: remove offeringId
    constructor (address _identityRegistry, address _compliance, uint256 _offeringId, string memory name, string memory symbol, address _protocol, address _onchainID) public ERC20PresetMinterPauser(name, symbol) {
        // solhint-disable-previous-line no-empty-blocks
        protocol = IAkemonaProtocol(_protocol);
        offeringId = _offeringId;
        _tokenOnchainID = _onchainID;
        _name = name;
        _symbol = symbol;
        
        if (_identityRegistry != address(0)) { // TODO: remove condition
            setIdentityRegistry(_identityRegistry);
        }
        if (_compliance != address(0)) {
            setCompliance(_compliance);
        }
    }

    function paused() public view override(IAkemonaSecurityToken, Pausable) returns (bool) {
        return  Pausable.paused();
    }

    function pause() public override(ERC20PresetMinterPauser, IAkemonaSecurityToken) onlyAgent {
        ERC20PresetMinterPauser.pause();
    }

    function unpause() public override(ERC20PresetMinterPauser, IAkemonaSecurityToken) onlyAgent {
        ERC20PresetMinterPauser.unpause();
    }

    function setOnchainID(address _onchainID) external override restricted {
        _tokenOnchainID = _onchainID;
        emit UpdatedTokenInformation(_name, _symbol, decimals(), TOKEN_VERSION, _tokenOnchainID);
    }

    function setIdentityRegistry(address _identityRegistry) public override restricted {
        _tokenIdentityRegistry = IIdentityRegistry(_identityRegistry);
        emit IdentityRegistryAdded(_identityRegistry);
    }

    function setCompliance(address _compliance) public override restricted {
        if (address(_tokenCompliance) != address(0)) {
            _tokenCompliance.unbindToken(address(this));
        }
        _tokenCompliance = IModularCompliance(_compliance);
        _tokenCompliance.bindToken(address(this));
        emit ComplianceAdded(_compliance);
    }

    function setName(string calldata _tokenName) external override restricted {
        require(keccak256(abi.encode(_tokenName)) != keccak256(abi.encode("")), "F1");
        _name = _tokenName;
        emit UpdatedTokenInformation(_name, _symbol, decimals(), TOKEN_VERSION, _tokenOnchainID);
    }

    function setSymbol(string calldata _tokenSymbol) external override restricted {
        require(keccak256(abi.encode(_symbol)) != keccak256(abi.encode("")), "F2");
        _symbol = _tokenSymbol;
        emit UpdatedTokenInformation(_name, _symbol, decimals(), TOKEN_VERSION, _tokenOnchainID);
    }

    modifier restricted() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "E3");
        _;
    }

    modifier onlyAgent() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()) || hasRole(AGENT_ROLE, _msgSender()), "E3");
        _;
    }

    function _transfer(address from, address to, uint256 value) internal override whenNotPaused {
         // TODO
        if (address(_tokenIdentityRegistry) == address(0) && address(_tokenCompliance) == address(0)) {
            require(!_frozen[to] && !_frozen[from], "F3");
            require(value <= balanceOf(from) - (_frozenTokens[from]), "F4");
            if (_tokenIdentityRegistry.isVerified(to) && _tokenCompliance.canTransfer(from, to, value)) {
                super._transfer(from, to, value);
                _tokenCompliance.transferred(from, to, value);
                //return true;
            } else {
                require(false, "F5");
            }           
        } else {
            // Old logic.  TODO: remove
            if (!hasRole(DEFAULT_ADMIN_ROLE, _msgSender())) {
                require(protocol.isTransferAuthorized(offeringId, from, to, value), "F6");

                if (hasDisbursement()) {
                    require(disbursement.isOpen() == false, "F7");
                }
            }

            super._transfer(from, to, value);
            //return true;
        }               
    }

    function forcedTransfer(
        address from,
        address to,
        uint256 value
    ) public override onlyAgent returns (bool) {
        require(balanceOf(from) >= value, "F8");
        uint256 freeBalance = balanceOf(from) - (_frozenTokens[from]);
        if (value > freeBalance) {
            uint256 tokensToUnfreeze = value - (freeBalance);
            _frozenTokens[from] = _frozenTokens[from] - (tokensToUnfreeze);
            emit TokensUnfrozen(from, tokensToUnfreeze);
        }
        if (_tokenIdentityRegistry.isVerified(to)) {
            _transfer(from, to, value);
            _tokenCompliance.transferred(from, to, value);
            return true;
        }
        require(false, "F9");
    }    

    function batchTransfer(address[] calldata _toList, uint256[] calldata _amounts) external override {
        for (uint256 i = 0; i < _toList.length; i++) {
            transfer(_toList[i], _amounts[i]);
        }
    }

    function batchForcedTransfer(
        address[] calldata _fromList,
        address[] calldata _toList,
        uint256[] calldata _amounts
    ) external override {
        for (uint256 i = 0; i < _fromList.length; i++) {
            forcedTransfer(_fromList[i], _toList[i], _amounts[i]);
        }
    }

    function batchMint(address[] calldata _toList, uint256[] calldata _amounts) external override {
        for (uint256 i = 0; i < _toList.length; i++) {
            mint(_toList[i], _amounts[i]);
        }
    }

    function batchBurn(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {
        for (uint256 i = 0; i < _userAddresses.length; i++) {
            burn(_userAddresses[i], _amounts[i]);
        }
    }

    function setAddressFrozen(address _userAddress, bool _freeze) public override onlyAgent {
        _frozen[_userAddress] = _freeze;

        emit AddressFrozen(_userAddress, _freeze, msg.sender);
    }

    function freezePartialTokens(address _userAddress, uint256 _amount) public override onlyAgent {
        uint256 balance = balanceOf(_userAddress);
        require(balance >= _frozenTokens[_userAddress] + _amount, "F10");
        _frozenTokens[_userAddress] = _frozenTokens[_userAddress] + (_amount);
        emit TokensFrozen(_userAddress, _amount);
    }

    function unfreezePartialTokens(address _userAddress, uint256 _amount) public override onlyAgent {
        require(_frozenTokens[_userAddress] >= _amount, "F11");
        _frozenTokens[_userAddress] = _frozenTokens[_userAddress] - (_amount);
        emit TokensUnfrozen(_userAddress, _amount);
    }


    function batchSetAddressFrozen(address[] calldata _userAddresses, bool[] calldata _freeze) external override {
        for (uint256 i = 0; i < _userAddresses.length; i++) {
            setAddressFrozen(_userAddresses[i], _freeze[i]);
        }
    }

    function batchFreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {
        for (uint256 i = 0; i < _userAddresses.length; i++) {
            freezePartialTokens(_userAddresses[i], _amounts[i]);
        }
    }

    function batchUnfreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {
        for (uint256 i = 0; i < _userAddresses.length; i++) {
            unfreezePartialTokens(_userAddresses[i], _amounts[i]);
        }
    }
/*
    function recoveryAddress(
        address _lostWallet,
        address _newWallet,
        address _investorOnchainID
    ) external override onlyAgent returns (bool) {
        require(balanceOf(_lostWallet) != 0, "F12");
        IIdentity _onchainID = IIdentity(_investorOnchainID);
        bytes32 _key = keccak256(abi.encode(_newWallet));
        if (_onchainID.keyHasPurpose(_key, 1)) {
            uint256 investorTokens = balanceOf(_lostWallet);
            uint256 frozenTokens = _frozenTokens[_lostWallet];
            _tokenIdentityRegistry.registerIdentity(_newWallet, _onchainID, _tokenIdentityRegistry.investorCountry
                (_lostWallet));
            forcedTransfer(_lostWallet, _newWallet, investorTokens);
            if (frozenTokens > 0) {
                freezePartialTokens(_newWallet, frozenTokens);
            }
            if (_frozen[_lostWallet] == true) {
                setAddressFrozen(_newWallet, true);
            }
            _tokenIdentityRegistry.deleteIdentity(_lostWallet);
            emit RecoverySuccess(_lostWallet, _newWallet, _investorOnchainID);
            return true;
        }
        require(false, "F13");
    }*/

/*
    function decimals() public view override (ERC20, IAkemonaSecurityToken) returns (uint8) {
        return 6;
    }
*/

    function identityRegistry() external view override returns (IIdentityRegistry) {
        return _tokenIdentityRegistry;
    }

    function compliance() external view override returns (IModularCompliance) {
        return _tokenCompliance;
    }

    function isFrozen(address _userAddress) external view override returns (bool) {
        return _frozen[_userAddress];
    }

    function getFrozenTokens(address _userAddress) external view override returns (uint256) {
        return _frozenTokens[_userAddress];
    }

    function onchainID() external view override returns (address) {
        return _tokenOnchainID;
    }

    function version() external pure override returns (string memory) {
        return TOKEN_VERSION;
    }

    function mintMultiple(address[] memory toArray, uint256[] memory amountArray) external restricted {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "F14");
        for (uint256 i = 0; i < toArray.length; i++) {
            _mint(toArray[i], amountArray[i]);
        }
    }

    function burnFromAdminMultiple(address[] memory accounts, uint256[] memory amounts) external restricted {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "F15");
        for (uint256 i = 0; i < accounts.length; i++) {
            _burn(accounts[i], amounts[i]);
        }
    }

    function setDisbursement(address _disbursement) public restricted {
        if (hasDisbursement()) {
            require(disbursement.isClosed(), "F16");
        }
        disbursement = AkemonaDisbursement(_disbursement);
        grantRole(DEFAULT_ADMIN_ROLE, _disbursement);
        _disbursementSet = true;
    }

    function hasDisbursement() public view returns (bool) {
        return _disbursementSet;
    }

    function totalSupplyNonWalletless() public view returns (uint256) {
        return totalSupply() - balanceOf(protocol.getOfferingOwnerAddress(offeringId));
    }

    function getDefaultAdminRole() external view returns (bytes32) {
        return DEFAULT_ADMIN_ROLE;
    }
    
    function getMinterRole() external view returns (bytes32) {
        return MINTER_ROLE;
    }

    function grantRole(bytes32 role, address account) public override(AccessControl, IAccessControl, IAkemonaSecurityToken) restricted {
        AccessControl.grantRole(role, account);
    }

    function renounceRole(bytes32 role, address account) public override(AccessControl, IAccessControl, IAkemonaSecurityToken) restricted {
        AccessControl.renounceRole(role, account);
    }

    function burn(uint256 amount) public override(ERC20Burnable, IAkemonaSecurityToken) onlyAgent {
        require(false, "Use burnFrom");
    }

    // TODO: remove this alias if its not needed
    function burnFrom(address account, uint256 amount) public override(ERC20Burnable, IAkemonaSecurityToken) onlyAgent {
        burn(account, amount);
    }

    function burn(address account, uint256 amount) public override onlyAgent {
        require(balanceOf(account) >= amount, "F17");
        uint256 freeBalance = balanceOf(account) - _frozenTokens[account];
        if (amount > freeBalance) {
            uint256 tokensToUnfreeze = amount - (freeBalance);
            _frozenTokens[account] = _frozenTokens[account] - (tokensToUnfreeze);
            emit TokensUnfrozen(account, tokensToUnfreeze);
        }
        ERC20Burnable.burnFrom(account, amount);
        _tokenCompliance.destroyed(account, amount);
    }

    function mint(address account, uint256 amount) public override(ERC20PresetMinterPauser, IAkemonaSecurityToken) onlyAgent {
        if (address(_tokenIdentityRegistry) != address(0)) { // TODO: remove condition
            require(_tokenIdentityRegistry.isVerified(account), "F18");
        }
        if (address(_tokenCompliance) != address(0)) { // TODO: remove condition
            require(_tokenCompliance.canTransfer(address(0), account, amount), "F19");
            ERC20PresetMinterPauser.mint(account, amount);
            _tokenCompliance.created(account, amount);
        } else {
            ERC20PresetMinterPauser.mint(account, amount);
        }
    }

    function transferFrom(address from, address to, uint256 amount) public override(ERC20, IAkemonaSecurityToken) whenNotPaused returns (bool) {
        require(!_frozen[to] && !_frozen[from], "F20");
        require(amount <= balanceOf(from) - (_frozenTokens[from]), "F21");
        if (address(_tokenIdentityRegistry) != address(0) && address(_tokenCompliance) != address(0)) { // TODO: remove condition
            if (_tokenIdentityRegistry.isVerified(to) && _tokenCompliance.canTransfer(from, to, amount)) {
                ERC20.transferFrom(from, to, amount);
                _tokenCompliance.transferred(from, to, amount);
                return true;
            }
        } else {
            ERC20.transferFrom(from, to, amount);
            return true;
        }
        require(false, "F22");
    }
}