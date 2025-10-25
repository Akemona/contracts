interface IIdentity {
    function keyHasPurpose(bytes32 _key, uint256 _purpose) external view returns (bool exists);
}