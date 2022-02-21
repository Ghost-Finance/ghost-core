//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './GTokenERC20.sol';
import './Minter.sol';
import './base/Feed.sol';
import './base/CoreMath.sol';

contract AuctionHouse is CoreMath {
  struct Auction {
    address user;
    address tokenAddress;
    address collateralTokenAddress;
    address keeperAddress;
    uint256 collateralBalance;
    uint256 collateralValue;
    uint256 synthAmount;
    uint256 auctionTarget;
    uint256 initialFeedPrice;
    address minterAddress;
    uint startTimestamp;
    uint endTimestamp;
  }

  uint256 constant PRICE_REDUCTION_RATIO = (uint256(99) * RAY) / 100;
  uint256 constant ratio = 9;
  uint256 constant buf = 1 ether;
  uint256 constant step = 90;
  uint256 constant dust = 10 ether;
  uint256 constant PENALTY_FEE = 11;
  uint256 constant chost = (dust * PENALTY_FEE) / 10;

  Auction[] public auctions;

  event Start(address indexed cdp, address indexed keeper, uint amount, uint start, uint end);
  event Take(uint256 indexed id, address indexed keeper, address indexed to, uint256 amount, uint256 price, uint256 end);

  function start (
    address user_,
    address tokenAddress_,
    address collateralTokenAddress_,
    address keeperAddress_,
    uint256 collateralBalance_,
    uint256 collateralValue_,
    uint256 auctionTarget_,
    uint256 initialFeedPrice_
  ) public {
    uint256 startTimestamp_ = block.timestamp;
    uint256 endTimestamp_ = startTimestamp_ + 1 weeks;

    auctions.push(
      Auction(
        user_,
        tokenAddress_,
        collateralTokenAddress_,
        keeperAddress_,
        collateralBalance_,
        collateralValue_,
        0,
        auctionTarget_,
        initialFeedPrice_,
        msg.sender,
        startTimestamp_,
        endTimestamp_
      )
    );

    emit Start(tokenAddress_, keeperAddress_, collateralBalance_, startTimestamp_, endTimestamp_);
    require(GTokenERC20(collateralTokenAddress_).transferFrom(msg.sender, address(this), collateralBalance_), "token transfer fail");
  }

  function take(uint256 auctionId, uint256 amount, uint256 maxCollateralPrice, address receiver) public  {
    Auction storage auction = auctions[auctionId];
    uint slice;
    uint keeperAmount;

    require(amount > 0 && auction.auctionTarget > 0, 'Invalid amount or auction finished');
    require(block.timestamp > auction.startTimestamp && block.timestamp < auction.endTimestamp, 'Auction period invalid');
    if (amount > auction.collateralBalance) {
      slice = auction.collateralBalance;
    } else {
      slice = amount;
    }

    uint priceTimeHouse = price(auction.initialFeedPrice, block.timestamp - auction.startTimestamp);
    require(maxCollateralPrice >= priceTimeHouse, 'price time house is bigger than collateral price');

    uint owe = mul(slice, priceTimeHouse) / WAD;
    uint liquidationTarget = calculateAmountToFixCollateral(auction.auctionTarget, (auction.collateralBalance * priceTimeHouse) / WAD);
    require(liquidationTarget > 0);

    if (liquidationTarget > owe) {
      keeperAmount = owe;

      if (auction.auctionTarget - owe >= chost) {
        slice = radiv(owe, priceTimeHouse);
        auction.auctionTarget -= owe;
        auction.collateralBalance -= slice;
      } else {
        require(auction.auctionTarget > chost, 'No partial purchase');
        slice = radiv((auction.auctionTarget - chost), priceTimeHouse);
        auction.auctionTarget = chost;
        auction.collateralBalance -= slice;
      }

      auction.synthAmount += mul(slice, priceTimeHouse) / WAD;
    } else {
      keeperAmount = liquidationTarget;
      slice = radiv(liquidationTarget, priceTimeHouse);
      auction.auctionTarget = 0;
      auction.collateralBalance -= slice;
      auction.synthAmount += keeperAmount;
    }


    GTokenERC20 synthToken = GTokenERC20(auction.tokenAddress);
    GTokenERC20 collateralToken = GTokenERC20(auction.collateralTokenAddress);

    require(synthToken.transferFrom(msg.sender, address(this), keeperAmount), 'transfer token from keeper fail');
    require(collateralToken.transfer(receiver, slice), "transfer token to keeper fail");

    if (auction.auctionTarget == 0) {
      collateralToken.approve(address(auction.minterAddress), auction.collateralBalance);
      synthToken.approve(address(auction.minterAddress), auction.synthAmount);

      auctionFinishCallback(
        auctionId,
        Minter(auction.minterAddress),
        address(auction.user),
        collateralToken,
        synthToken,
        auction.collateralBalance,
        auction.synthAmount
      );
    }

    emit Take(auctionId, msg.sender, receiver, slice, priceTimeHouse, auction.endTimestamp);
  }

  function calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) public pure returns (uint) {
    uint dividend = (ratio * debtBalance) - collateral;

    return dividend / (ratio - 1);
  }

  function getAuction(uint auctionId) public view returns (Auction memory) {
    return auctions[auctionId];
  }

  function price(uint256 initialPrice, uint256 duration) public pure returns (uint256) {
    return rmul(initialPrice, rpow(PRICE_REDUCTION_RATIO, duration / step, RAY));
  }

  function auctionFinishCallback(uint256 id, Minter minter, address user, GTokenERC20 tokenCollateral, GTokenERC20 synthToken, uint256 collateralBalance, uint256 synthAmount) public {
    minter.auctionFinish(id, user, tokenCollateral, synthToken, collateralBalance, synthAmount);
  }
}
