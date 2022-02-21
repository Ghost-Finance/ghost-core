//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract GTokenERC20 is ERC20, Ownable, Pausable {

  constructor(string memory name_, string memory symbol_, uint256 initialSupply) ERC20(name_, symbol_) {
    _mint(msg.sender, initialSupply);
  }

  function mint(address receiver, uint amount) external onlyOwner {
    _mint(receiver, amount);
  }

  function burn(uint256 amount) external  {
    _burn(msg.sender, amount);
  }
}
