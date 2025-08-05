
import "./IAkemonaSecurityTokenFactory.sol";
import "./AkemonaSecurityToken.sol";


contract AkemonaSecurityTokenFactory is IAkemonaSecurityTokenFactory 
{

    function deployToken(
        uint256 offeringId,
        string memory name,
        string memory symbol,
        address protocolAddress
    ) external override returns (address) {

        AkemonaSecurityToken token = new AkemonaSecurityToken(
            offeringId,
            name,
            symbol,
            protocolAddress
        );

        token.grantRole(token.DEFAULT_ADMIN_ROLE(), msg.sender);
        token.renounceRole(token.DEFAULT_ADMIN_ROLE(), address(this));
        return address(token);

    }

}