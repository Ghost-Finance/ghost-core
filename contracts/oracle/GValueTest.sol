pragma solidity ^0.8.0;

contract GValueTest {
  bool    has;
  uint256 val;

  function peek() public view returns (uint256, bool) {
    return (val, has);
  }

  function read() public view returns (uint256) {
    uint256 wut; bool haz;
    (wut, haz) = peek();
    require(haz, "haz-not");
    return wut;
  }

  function poke(uint256 wut) public {
    val = wut;
    has = true;
  }

  function void() public {  // unset the value
    has = false;
  }
}