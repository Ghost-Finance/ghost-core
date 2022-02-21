//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Feed {
  uint256 public price;
  string public name;

  constructor(uint price_, string memory name_) {
    price = price_;
    name = name_;
  }

  function updatePrice(uint price_) public {
    price = price_;
  }
}
