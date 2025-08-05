pragma solidity ^0.8.19;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/utils/Context.sol";
import "./AkemonaProxy.sol";


contract AkemonaCrowdsaleTracker is Context, AccessControlEnumerable {

    AkemonaProxy[] public crowdsaleProxies;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    modifier restricted() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "not authorized");
        _;
    }
    
    function addCrowdsaleProxy(address _crowdsaleProxy) public restricted {
        crowdsaleProxies.push(AkemonaProxy(_crowdsaleProxy));
    }

    function removeCrowdsaleProxy(uint256 index) public restricted {
        require(index < crowdsaleProxies.length);
        crowdsaleProxies[index] = crowdsaleProxies[crowdsaleProxies.length-1];
        crowdsaleProxies.pop();
    }
}