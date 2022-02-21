import { BigNumber } from 'ethers';

type AccountFlaggedForLiquidationEvent = {
  account: string;
  keeper: string;
  endFlagDate: string;
};

type AddPriceEvent = {
  sender: string;
  price: BigNumber;
};

type ApproveEvent = {
  to: string;
  from: string;
  amount: number;
};

type AuctionHouseTakeEvent = {
  keeper: string;
  receiver: string;
  totalAmount: BigNumber;
  price: BigNumber;
};

type BurnEvent = {
  user: string;
  token: string;
  value: number;
};

type ChangeMedianEvent = {
  sender: string;
  contractAddress: string;
};

type CreatePositionEvent = {
  account: string;
  data: Object;
};

type CreateSynthEvent = {
  address: string;
  name: string;
  symbol: string;
  feed: string;
};

type DepositedCollateralEvent = {
  user: string;
  tokenCollateral: string;
  amount: number;
};

type FinishPositionEvent = {
  account: string;
  direction: number;
  status: number;
};

type MintEvent = {
  user: string;
  amountTotal: number;
};

type LiquidateEvent = {
  userLiquidated: string;
  keeper: string;
  tokenAddress: string;
};

type StartAuctionHouseEvent = {
  token: string;
  keeper: string;
  collateralValue: number;
  endDateTime: number;
};

type TokenDetails = {
  name: string;
  symbol: string;
};

type TransferEvent = {
  sender: string;
  receiver: string;
  amount: number;
};

type WinnerOrLoserEvent = {
  account: string;
  amountToReceive: string;
};

type WithdrawnCollateralEvent = {
  account: string;
  token: string;
  amount: BigNumber;
};

export {
  AccountFlaggedForLiquidationEvent,
  AddPriceEvent,
  ApproveEvent,
  AuctionHouseTakeEvent,
  BurnEvent,
  CreateSynthEvent,
  ChangeMedianEvent,
  DepositedCollateralEvent,
  FinishPositionEvent,
  CreatePositionEvent,
  MintEvent,
  LiquidateEvent,
  StartAuctionHouseEvent,
  TokenDetails,
  TransferEvent,
  WinnerOrLoserEvent,
  WithdrawnCollateralEvent,
};
