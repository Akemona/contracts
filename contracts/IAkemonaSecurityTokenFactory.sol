interface IAkemonaSecurityTokenFactory {

    function deployToken(
        address identityRegistry,
        address compliance,
        uint256 offeringId,
        string memory name,
        string memory symbol,
        address protocolAddress, 
        address onchainID
    ) external returns (address);

}