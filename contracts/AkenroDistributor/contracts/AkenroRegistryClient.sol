// SPDX-License-Identifier: AGPL-3.0
pragma solidity >=0.8.3;

import "./AkenroRegistryClientInitializable.sol";

abstract contract AkenroRegistryClient is AkenroRegistryClientInitializable {
  constructor(address _registry) {
    __AkenroRegistryClient__initialize(_registry);
  }
}