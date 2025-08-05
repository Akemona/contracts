interface IAkemonaSecurityToken {

    function getDefaultAdminRole() external returns (bytes32);

    function getMinterRole() external returns (bytes32);

    function grantRole(bytes32 role, address account) external;
    
    function renounceRole(bytes32 role, address account) external;

    function burn(uint256 amount) external;

    function burnFrom(address account, uint256 amount) external;

    function mint(address account, uint256 amount) external;

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

}