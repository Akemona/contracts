pragma solidity ^0.8.19;

import "./IAkemonaProtocol.sol";      //#circular

interface IAkemonaWhitelist {

    function isPurchaseAuthorizedMerkle(address _investor, bytes32[] calldata proof) external view returns (bool);
    function isTransferAuthorizedMerkle(uint256 _offeringId, address _from, address _to, bytes32[] calldata _fromAccreditedProof, bytes32[] calldata _toProof) external view returns (bool);

    function isPurchaseAuthorized(address _investor, uint256 _amount) external view returns (bool); 
    function isTransferAuthorized(uint256 _offeringId, address _from, address _to, uint256 _amount) external view returns (bool);

    function addWhitelistedAddresses(address[] memory _addresses) external returns (bool);
    function removeWhitelistedAddresses(address[] memory _addresses) external;
}