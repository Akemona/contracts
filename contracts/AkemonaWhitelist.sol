pragma solidity ^0.8.19;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

import "./IAkemonaProtocol.sol";      //#circular
import "./IAkemonaWhitelist.sol";      //#circular
import "./AkemonaWhitelistTracker.sol";

contract AkemonaWhitelist is IAkemonaWhitelist {

    address public owner;
    IAkemonaProtocol protocol;

    mapping (address => bool) public accredited;
    mapping (address => bool) public whitelisted;
    mapping (address => mapping(address => bool)) public exceptions;

    uint256 public merkleRootVersion;
    bytes32 public currentMerkleRoot;
    uint256 public merkleRootVersionAccredited;
    bytes32 public currentMerkleRootAccredited;

    bool public largeScale;

    constructor(address _protocol, bool _largeScale) {
        owner = msg.sender;
        protocol = IAkemonaProtocol(_protocol);
        largeScale = _largeScale;
    }

    modifier restricted() {
        require(msg.sender == owner, "R");
        _;
    }

    function setMerkle(uint256 _version, bytes32 _root, uint256 _accreditedVersion, bytes32 _accreditedRoot) external restricted {
        merkleRootVersion = _version;
        currentMerkleRoot = _root;
        merkleRootVersionAccredited = _accreditedVersion;
        currentMerkleRootAccredited = _accreditedRoot;
    }

    function verifyCalldata(
        bytes32[] calldata proof,
        bytes32 root,
        bytes32 leaf
    ) internal pure returns (bool) {
        return processProofCalldata(proof, leaf) == root;
    }

    function processProofCalldata(
        bytes32[] calldata proof,
        bytes32 leaf
    ) internal pure returns (bytes32) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = _hashPair(computedHash, proof[i]);
        }
        return computedHash;
    }

    function _hashPair(bytes32 a, bytes32 b)
        private
        pure
        returns(bytes32)
    {
        return a < b ? _efficientHash(a, b) : _efficientHash(b, a);
    }

    function _efficientHash(bytes32 a, bytes32 b)
        private
        pure
        returns (bytes32 value)
    {
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            value := keccak256(0x00, 0x40)
        }
    }

    function isPurchaseAuthorizedMerkle(address _investor, bytes32[] calldata proof) external view override returns (bool) {
        require(largeScale == true);
        return verifyCalldata(proof, currentMerkleRoot, keccak256(abi.encodePacked(_investor)));
    }

    function isPurchaseAuthorized(address _investor, uint256 _amount) external view override returns (bool) {
        require(largeScale == false);
        if (!whitelisted[_investor]) {
            return false;
        }
        return true;
    }

    function isTransferAuthorizedMerkle(uint256 _offeringId, address _from, address _to, bytes32[] calldata _fromAccreditedProof, bytes32[] calldata _toProof) external view override returns (bool) {
        require(largeScale == true);
        if (exceptions[_from][_to]) {
            return true;
        }
        
        if (!protocol.getOfferingIsDisbursed(_offeringId)) {
            return false;
        }
        if (!verifyCalldata(_toProof, currentMerkleRoot, keccak256(abi.encodePacked(_to)))) {
            return false;
        }
        if (block.timestamp - protocol.getOfferingDisbursementTime(_offeringId) > 60 * 60 * 24 * 365) {
            return true;
        }
        if (_fromAccreditedProof.length > 0 && verifyCalldata(_fromAccreditedProof, currentMerkleRootAccredited, keccak256(abi.encodePacked(_from)))) {
            return true;
        }

        // If the crowdsale contract is in a buyback period, and the toAddress is the borrower, and the fromAddress is an original investor in the crowdsale, return true
        return false;
    }

    function isTransferAuthorized(uint256 _offeringId, address _from, address _to, uint256 _amount) external view override returns (bool) {
        require(largeScale == false);
        if (exceptions[_from][_to]) {
            return true;
        }
        
        if (!protocol.getOfferingIsDisbursed(_offeringId)) {
            return false;
        }
        if (!whitelisted[_to]) {
            return false;
        }
        if (block.timestamp - protocol.getOfferingDisbursementTime(_offeringId) > 60 * 60 * 24 * 365) {
            return true;
        }
        if (accredited[_from]) {
            return true;
        }

        // If the crowdsale contract is in a buyback period, and the toAddress is the borrower, and the fromAddress is an original investor in the crowdsale, return true
        return false;
    }

    function addAccreditedStatus(address[] memory _addresses) public restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = true;
        }
    }

    function addWhitelistedAddresses(address[] memory _addresses) public override restricted returns (bool) {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = true;
        }
        return true;
    }

    function removeAccreditedStatus(address[] memory _addresses) public restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = false;
        }
    }

    function removeWhitelistedAddresses(address[] memory _addresses) public override restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            accredited[_addresses[i]] = false;
            whitelisted[_addresses[i]] = false;
        }
    }

    function addException(address _from, address  _to) public restricted {
        exceptions[_from][_to] = true;
    }

    function removeException(address _from, address _to) public restricted {
        exceptions[_from][_to] = false;
    }

    function hasException(address _from, address _to) public view returns (bool) {
        return exceptions[_from][_to];
    }
}