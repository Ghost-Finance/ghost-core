//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './GTokenERC20.sol';

contract PositionVault {
  GTokenERC20 public token;
  address public owner;
  mapping (uint256 => uint256) public positionVaultData;

  constructor(GTokenERC20 _token, address _owner) {
    token = GTokenERC20(_token);
    owner = _owner;
  }

  modifier onlyOwner() {
    require(address(owner) == address(msg.sender), 'Only owner!');
    _;
  }

  function addDeposit(uint256 position, address account, uint256 amount) public onlyOwner {
    require(token.transferFrom(account, address(this), amount));
    positionVaultData[position] += amount;
  }

  function removeDeposit(uint256 position, address account, uint256 amount) public onlyOwner {
    positionVaultData[position] -= amount;
  }

  function withdrawFullDeposit(uint256 position) public onlyOwner returns (uint256) {
    require(positionVaultData[position] != 0, 'Invalid position');

    return positionVaultData[position];
  }

  function transferFrom(address receiver, uint256 amount) public onlyOwner {
    token.transfer(receiver, amount);
  }
}
