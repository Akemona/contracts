pragma solidity ^0.8.19;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

import "./IAkemonaProtocol.sol";
import "./IAkemonaWhitelist.sol";
import "./AkemonaWhitelistTracker.sol";

contract AkemonaWhitelistPermissionless is IAkemonaWhitelist {

    address public owner;
    IAkemonaProtocol protocol;

    mapping (address => bool) public whitelisted;

    uint256 public merkleRootVersion;
    bytes32 public currentMerkleRoot;

    bool public largeScale;

    constructor(address _protocol, bool _largeScale) public {
        owner = msg.sender;
        protocol = IAkemonaProtocol(_protocol);
        largeScale = _largeScale;
    }

    modifier restricted() {
        require(msg.sender == owner, "R");
        _;
    }

    function setMerkle(uint256 _version, bytes32 _root) public restricted {
        merkleRootVersion = _version;
        currentMerkleRoot = _root;
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

    function isTransferAuthorizedMerkle(uint256 _offeringId, address _from, address _to, bytes32[] calldata _fromProof, bytes32[] calldata _toProof) external view override returns (bool) {
        require(largeScale == true);

        if (!verifyCalldata(_toProof, currentMerkleRoot, keccak256(abi.encodePacked(_from)))) {
            return false;
        }
        if (!verifyCalldata(_toProof, currentMerkleRoot, keccak256(abi.encodePacked(_to)))) {
            return false;
        }

        // If the crowdsale contract is in a buyback period, and the toAddress is the borrower, and the fromAddress is an original investor in the crowdsale, return true
        return false;
    }

    function isTransferAuthorized(uint256 _offeringId, address _from, address _to, uint256 _amount) external view override returns (bool) {
        require(largeScale == false);
        //if (!_contract.isDisbursed()) {
        //    return false;
        //}
        if (whitelisted[_from] && whitelisted[_to]) {
            return true;
        }

        return false;
    }

    function addWhitelistedAddresses(address[] memory _addresses) public override restricted returns (bool) {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = true;
        }
        return true;
    }


    function removeWhitelistedAddresses(address[] memory _addresses) public override restricted {
        for (uint256 i = 0; i < _addresses.length; i++) {
            whitelisted[_addresses[i]] = false;
        }
    }

}