pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/utils/Context.sol";
import "./IAkemonaWhitelist.sol";


contract AkemonaWhitelistTracker is Context, AccessControlEnumerable {

    IAkemonaWhitelist[] public whitelists;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    modifier restricted() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "not authorized");
        _;
    }
    
    function addWhitelist(address _whitelist) public restricted {
        whitelists.push(IAkemonaWhitelist(_whitelist));
    }

    function removeWhitelist(uint256 index) public restricted {
        require(index < whitelists.length);
        whitelists[index] = whitelists[whitelists.length-1];
        whitelists.pop();
    }
}