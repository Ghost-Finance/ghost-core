//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract CoreMath {
  using SafeMath for uint256;

  uint256 constant WAD = 10**18;
  uint256 constant RAY = 10**27;
  uint256 constant RAD = 10**45;

  function wad() public pure returns (uint256) {
    return WAD;
  }

  function ray() public pure returns (uint256) {
    return RAY;
  }

  function rad() public pure returns (uint256) {
    return RAD;
  }
  function radiv(uint256 dividend, uint256 divisor) public pure returns (uint256) {
    return div(div(dividend * RAD, divisor), RAY);
  }

  function rmul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    z = mul(x, y);
    require(y == 0 || z / y == x);
    z = div(z, RAY);
  }

  function orderToSub(uint256 a, uint256 b) internal pure returns (uint256) {
    if (b > a) {
      return 0;
    }

    return a - b;
  }

  function rpow(uint256 x, uint256 n, uint256 b) internal pure returns (uint256 z) {
    assembly {
      switch n case 0 { z := b }
      default {
        switch x case 0 { z := 0 }
        default {
          switch mod(n, 2) case 0 { z := b } default { z := x }
          let half := div(b, 2)  // for rounding.
          for { n := div(n, 2) } n { n := div(n,2) } {
            let xx := mul(x, x)
            if shr(128, x) { revert(0,0) }
            let xxRound := add(xx, half)
            if lt(xxRound, xx) { revert(0,0) }
            x := div(xxRound, b)
            if mod(n,2) {
              let zx := mul(z, x)
              if and(iszero(iszero(x)), iszero(eq(div(zx, x), z))) { revert(0,0) }
              let zxRound := add(zx, half)
              if lt(zxRound, zx) { revert(0,0) }
              z := div(zxRound, b)
            }
          }
        }
      }
    }
  }

  function mul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    z = x * y;
  }

  function div(uint256 x, uint256 y) internal pure returns (uint256 z) {
    z = x / y;
  }
}
