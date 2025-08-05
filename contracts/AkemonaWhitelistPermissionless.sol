pragma solidity ^0.8.19;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

import "./IAkemonaProtocol.sol";
import "./IAkemonaWhitelist.sol";
import "./AkemonaWhitelistTracker.sol";

contract AkemonaWhitelistPermissionless is IAkemonaWhitelist {

    address public owner;
    IAkemonaProtocol protocol;

    mapping (address => bool) public whitelisted;

    constructor(address _protocol) public {
        owner = msg.sender;
        protocol = IAkemonaProtocol(_protocol);
    }

    modifier restricted() {
        require(msg.sender == owner, "R");
        _;
    }

    function isPurchaseAuthorized(address _investor, uint256 _amount) external view override returns (bool) {
        if (!whitelisted[_investor]) {
            return false;
        }
        return true;
    }

    function isTransferAuthorized(uint256 _offeringId, address _from, address _to, uint256 _amount) external view override returns (bool) {
        //if (!_contract.isDisbursed()) {
        //    return false;
        //}
        if (whitelisted[_from] && whitelisted[_to]) {
            return true;
        }

        return false;
    }

    function addWhitelistedAddresses(address[] memory _addresses) public override restricted returns (bool) {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = true;
        }
        return true;
    }


    function removeWhitelistedAddresses(address[] memory _addresses) public override restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = false;
        }
    }

}