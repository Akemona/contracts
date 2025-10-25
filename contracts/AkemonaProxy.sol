
import "../node_modules/openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol";

pragma solidity ^0.8.17;

contract AkemonaProxy is AccessControlEnumerable {

    address public _contract;

    constructor(address _con) public {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _contract = _con;
    }

    modifier restricted() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "E3");
        _;
    }

    function setContract(address _con) public restricted {
        _contract = _con;
    }

    function addAdmin(address account) public restricted {
        grantRole(DEFAULT_ADMIN_ROLE, account);
    }

    function getContract() public view returns (address) {
        return _contract;
    }
}