interface IAkemonaSecurityTokenFactory {

    function deployToken(
        uint256 offeringId,
        string memory name,
        string memory symbol,
        address protocolAddress
    ) external returns (address);

}