pragma solidity ^0.8.19;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

import "./IAkemonaProtocol.sol";      //#circular
import "./IAkemonaWhitelist.sol";      //#circular
import "./AkemonaWhitelistTracker.sol";

contract AkemonaWhitelist is IAkemonaWhitelist {

    address public owner;
    IAkemonaProtocol protocol;

    mapping (address => bool) public accredited;
    mapping (address => bool) public whitelisted;
    mapping (address => mapping(address => bool)) public exceptions;

    constructor(address _protocol) {
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
        if (exceptions[_from][_to]) {
            return true;
        }
        
        if (!protocol.getOfferingIsDisbursed(_offeringId)) {
            return false;
        }
        if (!whitelisted[_to]) {
            return false;
        }
        if (block.timestamp - protocol.getOfferingDisbursementTime(_offeringId) > 60 * 60 * 24 * 365) {
            return true;
        }
        if (accredited[_from]) {
            return true;
        }

        // If the crowdsale contract is in a buyback period, and the toAddress is the borrower, and the fromAddress is an original investor in the crowdsale, return true
        return false;
    }

    function addAccreditedStatus(address[] memory _addresses) public restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = true;
        }
    }

    function addWhitelistedAddresses(address[] memory _addresses) public override restricted returns (bool) {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = true;
        }
        return true;
    }

    function removeAccreditedStatus(address[] memory _addresses) public restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = false;
        }
    }

    function removeWhitelistedAddresses(address[] memory _addresses) public override restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = false;
            whitelisted[_addresses[i]] = false;
        }
    }

    function addException(address _from, address  _to) public restricted {
        exceptions[_from][_to] = true;
    }

    function removeException(address _from, address _to) public restricted {
        exceptions[_from][_to] = false;
    }

    function hasException(address _from, address _to) public view returns (bool) {
        return exceptions[_from][_to];
    }
}