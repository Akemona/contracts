pragma solidity ^0.8.19;


import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";


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

    constructor (uint256 _offeringId, string memory name, string memory symbol, address _protocol) public ERC20PresetMinterPauser(name, symbol) {
        // solhint-disable-previous-line no-empty-blocks
        protocol = IAkemonaProtocol(_protocol);
        offeringId = _offeringId;
    }

    modifier restricted() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "E3");
        _;
    }

    function _transfer(address from, address to, uint256 value) internal override {
        if (!hasRole(DEFAULT_ADMIN_ROLE, _msgSender())) {
            require(protocol.isTransferAuthorized(offeringId, from, to, value), "Transfer is not authorized.");

            if (hasDisbursement()) {
                require(disbursement.isOpen() == false, "Cannot transfer while disbursement is open.");
            }
        }
        
        super._transfer(from, to, value);
    }

    function decimals() public view override returns (uint8) {
        return 6;
    }

    function mintMultiple(address[] memory toArray, uint256[] memory amountArray) external restricted {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "AkemonaCrowdsaleToken: must have admin role to call mintMultiple");
        for (uint256 i = 0; i < toArray.length; i++) {
            _mint(toArray[i], amountArray[i]);
        }
    }

    function burnFromAdminMultiple(address[] memory accounts, uint256[] memory amounts) external restricted {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "AkemonaCrowdsaleToken: must have admin role to call burnFromAdmin");
        for (uint256 i = 0; i < accounts.length; i++) {
            _burn(accounts[i], amounts[i]);
        }
    }

   // function balanceOf(address account) public override view returns (uint256) {
    //    return super.balanceOf(account);
   // }


    function setDisbursement(address _disbursement) public restricted {
        if (hasDisbursement()) {
            require(disbursement.isClosed(), "Cannot replace a disbursement that isnt closed");
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

    function grantRole(bytes32 role, address account) public override(AccessControl, IAccessControl, IAkemonaSecurityToken) {
        AccessControl.grantRole(role, account);
    }

    function renounceRole(bytes32 role, address account) public override(AccessControl, IAccessControl, IAkemonaSecurityToken) {
        AccessControl.renounceRole(role, account);
    }

    function burn(uint256 amount) public override(ERC20Burnable, IAkemonaSecurityToken) {
        ERC20Burnable.burn(amount);
    }

    function burnFrom(address account, uint256 amount) public override(ERC20Burnable, IAkemonaSecurityToken) {
        ERC20Burnable.burnFrom(account, amount);
    }

    function mint(address account, uint256 amount) public override(ERC20PresetMinterPauser, IAkemonaSecurityToken) {
        ERC20PresetMinterPauser.mint(account, amount);
    }

    function transferFrom(address from, address to, uint256 amount) public override(ERC20, IAkemonaSecurityToken) returns (bool) {
        _transfer(from, to, amount);
        return true;
    }

    function transferFromMerkle(address from, address to, uint256 amount, bytes32[] calldata fromProof, bytes32[] calldata toProof) public override(IAkemonaSecurityToken) returns (bool) {
        if (!hasRole(DEFAULT_ADMIN_ROLE, _msgSender())) {
            require(protocol.isTransferAuthorizedMerkle(offeringId, from, to, fromProof, toProof), "Transfer is not authorized.");

            if (hasDisbursement()) {
                require(disbursement.isOpen() == false, "Cannot transfer while disbursement is open.");
            }
        }
    
        super._transfer(from, to, amount);
        return true;
    }
}