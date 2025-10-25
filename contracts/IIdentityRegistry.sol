
import "./IIdentity.sol";

interface IIdentityRegistry {
    function isVerified(address _userAddress) external view returns (bool);
    function investorCountry(address _userAddress) external view returns (uint16);
    function registerIdentity(
        address _userAddress,
        IIdentity _identity,
        uint16 _country
    ) external;
    function deleteIdentity(address _userAddress) external;
}