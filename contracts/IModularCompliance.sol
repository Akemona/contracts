interface IModularCompliance {
    function bindToken(address _token) external;
    function unbindToken(address _token) external;

    function canTransfer(
        address _from,
        address _to,
        uint256 _amount
    ) external view returns (bool);

    function transferred(
        address _from,
        address _to,
        uint256 _amount
    ) external;

    function created(address _to, uint256 _amount) external;
    function destroyed(address _from, uint256 _amount) external;
}