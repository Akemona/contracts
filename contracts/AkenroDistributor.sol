// SPDX-License-Identifier: AGPL-3.0
pragma solidity >=0.8.3;

import "./AkenroDistributor/openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./AkenroDistributor/openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./AkenroDistributor/openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./AkenroDistributor/openzeppelin/contracts/proxy/Clones.sol";
import "./AkenroDistributor/contracts/AkenroRegistryClient.sol";
import "./AkenroDistributor/contracts/interfaces/IAkenroDistributor.sol";
import "./Akenro/IAkenro.sol";
import "./AkenroDistributor/contracts/libraries/AkenroLibrary.sol";

/**
 * @dev AkenroDistributor
 *
 * Distributes Akenro token to a timelocked contract
 * Users can claim drops by providing correct proofs.
 *
 * @notice Akenro governance must approve this contract to transfer tokens
 */
contract AkenroDistributor is
  IAkenroDistributor,
  AkenroRegistryClient
{
  /// @notice use SafeERC20
  using SafeERC20 for IERC20;

  /// @dev Akenro token contract
  address public immutable override akenro;
  /// @dev Token multisig with Akenro to claim
  address public akenroMultisig;
  /// @dev The merkle root which will be used to verify claims
  bytes32 public override merkleRoot;
  /// @dev The investorType that claims from this contract
  IAkenro.InvestorType public immutable investorType;

  /// @dev This is a packed array of booleans.
  mapping(uint256 => uint256) private claimedBitMap;

  constructor(
    address _akenro,
    address _akenroMultisig,
    address _registry,
    bytes32 _merkleRoot,
    IAkenro.InvestorType _investorType
  ) AkenroRegistryClient(_registry) {
    akenro = _akenro;
    akenroMultisig = _akenroMultisig;
    merkleRoot = _merkleRoot;
    investorType = _investorType;
  }

  /**
   * @dev Check if the user of the merkle index has claimed drops already.
   * @param index - The merkle index
   * @return true if it's claimed, otherwise false
   */
  function isClaimed(uint256 index) public view override returns (bool) {
    uint256 claimedWordIndex = index / 256;
    uint256 claimedBitIndex = index % 256;
    uint256 claimedWord = claimedBitMap[claimedWordIndex];
    uint256 mask = (1 << claimedBitIndex);
    return claimedWord & mask == mask;
  }

  /**
   * @dev Marks that the user of the merkle index has claimed drops.
   * @param index - The merkle index
   */
  function _setClaimed(uint256 index) private {
    uint256 claimedWordIndex = index / 256;
    uint256 claimedBitIndex = index % 256;
    claimedBitMap[claimedWordIndex] =
      claimedBitMap[claimedWordIndex] |
      (1 << claimedBitIndex);
  }

  /**
   * @notice Marks that the user of the merkle index has claimed drops.
   * @param _newMultisig - Address that holds Akenro to transfer to the user
   */
  function updateMultisig(address _newMultisig)
    external
    isAuthorized(AkenroLib.GOVERNANCE_ROLE)
  {
    akenroMultisig = _newMultisig;
    emit MultiSigUpdated(_newMultisig);
  }

  /**
   * @dev Allows users to claim tokens.
   * It reverts when the user has already claimed or after terminated.
   * index, account, amount, merkleProof - all these data has been used
   * to contribute merkle tree, hence users must keep it securely and provide correct data
   * or it will fail to claim.
   *
   * @param index       - The merkle index
   * @param account     - The address of the user
   * @param amount      - The amount to be distributed to the user
   * @param merkleProof - The merkle proof
   */
  function claim(
    uint256 index,
    address account,
    uint256 amount,
    bytes32[] calldata merkleProof
  ) external override {
    require(msg.sender == account, "Can't claim another user's tokens");
    require(!isClaimed(index), "Akenro: Drop already claimed.");

    // Verify the merkle proof.
    bytes32 node = keccak256(abi.encodePacked(index, account, amount));
    require(
      MerkleProof.verify(merkleProof, merkleRoot, node),
      "Akenro: Invalid proof."
    );

    // Mark address as claimed
    _setClaimed(index);

    // Set tranche balances for user
    IAkenro(akenro).updateTrancheBalance(account, amount, investorType);

    IERC20(akenro).safeTransferFrom(akenroMultisig, account, amount);

    emit Claimed(index, account, amount);
  }
}