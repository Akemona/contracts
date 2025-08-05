interface IAkemonaProtocol {
    function isTransferAuthorized(
        uint256 offeringId,
        address from,
        address to,
        uint256 value
    ) external view returns (bool);

    function getOfferingOwnerAddress(
        uint256 offeringId
    ) external view returns (address);

    function getOfferingIsDisbursed(
        uint256 offeringId
    ) external view returns (bool);

    function getOfferingDisbursementTime(
        uint256 offeringId
    ) external view returns (uint256);  
}