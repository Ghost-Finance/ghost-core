//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './oracle/GSpot.sol';
import './base/CoreMath.sol';
import './DebtPool.sol';
import './GTokenERC20.sol';
import './PositionVault.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

contract UpdateHouse is CoreMath, Ownable {

  using SafeMath for uint256;

  GTokenERC20 public token;
  GSpot public spot;
  DebtPool public debtPool;
  PositionVault public vault;
  address staker;

  enum Direction{ UNSET, SHORT, LONG }
  enum Status { UNSET, OPEN, FINISHED }

  struct PositionData {
    address account;
    Direction direction;
    Status status;
    bytes32 synth;
    uint256 averagePrice;
    uint256 lastSynthPrice;
    uint256 tokenAmount;
    uint256 synthTokenAmount;
    uint256 created_at;
    uint256 updated_at;
  }

  uint positionCount;

  mapping (uint => PositionData) public data;

  event Create(address account, PositionData data);
  event Finish(address account, Direction direction, Status status);
  event Increase(address account, PositionData data);
  event Decrease(address account, PositionData data);
  event Winner(address account, uint256 amount);
  event Loser(address account, uint256 amount);

  constructor(GTokenERC20 token_, GSpot spot_, DebtPool debtPool_) {
    token = GTokenERC20(token_);
    spot = GSpot(spot_);
    debtPool = DebtPool(debtPool_);
  }

  function setVault() public onlyOwner {
    vault = new PositionVault(token, address(this));
  }

  function getVault() public view returns (address) {
    return address(vault);
  }

  function createPosition(uint256 amount, bytes32 synthKey, Direction direction_) external {
    require(amount > 0, 'Invalid amount');
    require(direction_ == Direction.SHORT || direction_ == Direction.LONG, "Invalid position option");

    uint256 initialPrice = spot.read(synthKey);
    require(initialPrice > 0);

    PositionData memory dataPosition = _create(msg.sender, direction_, synthKey, initialPrice, amount);
    _addPositionVault(positionCount, address(msg.sender), amount);

    emit Create(msg.sender, dataPosition);
  }

  function increasePosition(uint index, uint256 deltaAmount) external {
    PositionData storage dataPosition = data[index];
    require(dataPosition.account == msg.sender && dataPosition.status != Status.FINISHED);
    uint256 currentPrice = spot.read(dataPosition.synth);
    require(currentPrice > 0, 'Invalid synth price');
    _addPositionVault(index, address(msg.sender), deltaAmount);

    uint256 newSynthTokenAmount = mul(deltaAmount, WAD).div(currentPrice);
    uint256 oldSynthPrice = div(dataPosition.synthTokenAmount.mul(dataPosition.averagePrice), WAD);
    uint256 newSynthPrice = div(newSynthTokenAmount.mul(currentPrice), WAD);
    uint256 averagePrice = div(mul(newSynthPrice.add(oldSynthPrice), WAD), dataPosition.synthTokenAmount.add(newSynthTokenAmount));

    dataPosition.averagePrice = averagePrice;
    dataPosition.tokenAmount += deltaAmount;
    dataPosition.synthTokenAmount = newSynthTokenAmount;
    emit Increase(msg.sender, dataPosition);
  }

  function decreasePosition(uint index, uint256 deltaAmount) external {
    PositionData storage dataPosition = data[index];
    require(dataPosition.account == msg.sender && dataPosition.status != Status.FINISHED);
    uint256 currentPrice = spot.read(dataPosition.synth);
    require(currentPrice > 0, 'Invalid synth price');

    int positionFixValue = getPositionFix(dataPosition.direction, dataPosition.synthTokenAmount, currentPrice, dataPosition.lastSynthPrice);
    uint256 oldTokenAmount = uint(int(dataPosition.tokenAmount) + positionFixValue);
    uint256 newTokenAmount = oldTokenAmount.sub(deltaAmount);
    uint256 newSynthTokenAmount = div(newTokenAmount.mul(dataPosition.synthTokenAmount), oldTokenAmount);
    uint256 tokenAmount = uint(int(newTokenAmount) - positionFixValue);
    require(tokenAmount == deltaAmount);

    dataPosition.tokenAmount -= tokenAmount;
    dataPosition.averagePrice = (newTokenAmount * WAD).div(newSynthTokenAmount);
    dataPosition.synthTokenAmount = newSynthTokenAmount;
    dataPosition.lastSynthPrice = currentPrice;

    _removePositionVault(index, address(msg.sender), tokenAmount);

    emit Decrease(msg.sender, dataPosition);
  }

  function finishPosition(uint index) external {
    PositionData storage dataPosition = data[index];
    require(dataPosition.account == msg.sender && dataPosition.status != Status.FINISHED, 'Invalid account or position already finished!');
    uint256 currentPrice = spot.read(dataPosition.synth);
    require(currentPrice > 0, 'Current price not valid!');

    int positionFixValue = getPositionFix(dataPosition.direction,
                                          dataPosition.synthTokenAmount,
                                          currentPrice,
                                          dataPosition.lastSynthPrice);

    uint256 currentPricePosition = uint(int(dataPosition.tokenAmount) + positionFixValue);

    uint256 amount = vault.withdrawFullDeposit(index);
    uint256 amountToReceive;
    if (currentPricePosition >= dataPosition.tokenAmount) {
      amountToReceive = currentPricePosition - dataPosition.tokenAmount;
      debtPool.mint(amountToReceive);

      vault.transferFrom(address(msg.sender), amount);
      debtPool.transferFrom(address(msg.sender), amountToReceive);

      emit Winner(address(msg.sender), amount + amountToReceive);
    } else {
      amountToReceive = amount - currentPricePosition;
      vault.transferFrom(address(debtPool), amountToReceive);
      debtPool.burn(amountToReceive);
      vault.transferFrom(address(msg.sender), currentPricePosition);

      emit Loser(address(msg.sender), currentPricePosition);
    }

    dataPosition.status = Status.FINISHED;
    dataPosition.updated_at = block.timestamp;
    data[index] = dataPosition;

    emit Finish(address(msg.sender), dataPosition.direction, dataPosition.status);
  }

  function _create(address account, Direction direction, bytes32 synthKey, uint256 price, uint256 amount) internal returns (PositionData memory) {
    PositionData memory dataPosition = PositionData(
      address(account),
      direction,
      Status.OPEN,
      synthKey,
      price,
      price,
      amount,
      radiv(amount, price),
      block.timestamp,
      block.timestamp
    );
    positionCount++;
    data[positionCount] = dataPosition;

    return dataPosition;
  }

  function getPositionFix(Direction direction, uint256 synthTokenAmount, uint256 currentTokenSynthAmount, uint256 lastTokenSynthAmount) public returns (int) {
    uint256 newPrice = synthTokenAmount.mul(currentTokenSynthAmount) / WAD;
    uint256 oldPrice = synthTokenAmount.mul(lastTokenSynthAmount) / WAD;

    int result = int(newPrice) - int(oldPrice);

    return result * (direction == Direction.SHORT ? int(-1) : int(1));
  }

  function _addPositionVault(uint index, address account, uint amount) internal {
    vault.addDeposit(index, account, amount);
  }

  function _removePositionVault(uint index, address account, uint amount) internal {
    vault.removeDeposit(index, account, amount);
  }
}
