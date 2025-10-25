
import "./IAkemonaSecurityTokenFactory.sol";
import "./AkemonaSecurityToken.sol";


contract AkemonaSecurityTokenFactory is IAkemonaSecurityTokenFactory 
{

    function deployToken(
        address identityRegistry,
        address compliance,
        uint256 offeringId,
        string memory name,
        string memory symbol,
        address protocolAddress, 
        address onchainID
    ) external override returns (address) {

        AkemonaSecurityToken token = new AkemonaSecurityToken(
            identityRegistry,
            compliance,
            offeringId,
            name,
            symbol,
            protocolAddress,
            onchainID
        );

        token.grantRole(token.DEFAULT_ADMIN_ROLE(), msg.sender);
        token.renounceRole(token.DEFAULT_ADMIN_ROLE(), address(this));
        return address(token);

    }

}