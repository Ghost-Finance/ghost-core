//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import './GTokenERC20.sol';
import './UpdateHouse.sol';
import './Minter.sol';

contract DebtPool is Ownable {

  GTokenERC20 public token;
  Minter public minter;
  UpdateHouse public updateHouse;

  modifier onlyHouse() {
    require(msg.sender == address(updateHouse), 'Is not update house');
    _;
  }

  constructor(address token_, address minter_) {
    token = GTokenERC20(token_);
    minter = Minter(minter_);
  }

  function addUpdatedHouse(address updated_) public onlyOwner {
    updateHouse = UpdateHouse(updated_);
  }

  function mint(uint256 amount) public onlyHouse {
    minter.debtPoolMint(token, amount);
  }

  function burn(uint256 amount) public onlyHouse {
    minter.debtPoolBurn(token, amount);
  }

  function transferFrom(address receiver, uint256 amount) public onlyHouse {
    token.transfer(receiver, amount);
  }

  function getSynthDebt() public returns (uint256) {
    return minter.synthDebt(address(this), token);
  }
}