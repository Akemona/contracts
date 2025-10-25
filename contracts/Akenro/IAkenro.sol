// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.17;

interface IAkenro {
  enum InvestorType {PublicTranche1, PublicTranche2, SeedTranche}

  // ----------- State changing api -----------

  /// @notice Called by timelock contract to initialize locked balance of public/seed investor
  function updateTrancheBalance(
    address beneficiary,
    uint256 rawAmount,
    InvestorType tranche
  ) external;

  // ----------- Getters -----------

  /// @notice Gets the TOTAL amount of Akenro available for an address
  function getFreedBalance(address account) external view returns (uint96);

  /// @notice Gets the initial locked balance and unlocked Akenro for an address
  function getVestedBalance(address account)
    external
    view
    returns (uint96, uint96);
}
