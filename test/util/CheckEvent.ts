import { ethers } from 'hardhat';
import { BigNumber, Contract } from 'ethers';
import { expect } from 'chai';
import {
  AccountFlaggedForLiquidationEvent,
  AddPriceEvent,
  AuctionHouseTakeEvent,
  ChangeMedianEvent,
  CreateSynthEvent,
  BurnEvent,
  DepositedCollateralEvent,
  FinishPositionEvent,
  CreatePositionEvent,
  MintEvent,
  LiquidateEvent,
  StartAuctionHouseEvent,
  WinnerOrLoserEvent,
  WithdrawnCollateralEvent,
} from '../types/types';

export const checkCreateSynthEvent = async (
  contract: Contract,
  name: string,
  symbol: string,
  feedAddress: Contract
): Promise<boolean> => {
  let createSynthEvent = new Promise<CreateSynthEvent>((resolve, reject) => {
    contract.on('CreateSynth', (address, name, symbol, feed) => {
      resolve({
        address: address,
        name: name,
        symbol: symbol,
        feed: feed,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventCreateSynth = await createSynthEvent;
  expect(eventCreateSynth.name).to.be.equal(name);
  expect(eventCreateSynth.symbol).to.be.equal(symbol);
  expect(eventCreateSynth.feed).to.be.equal(feedAddress);

  contract.removeAllListeners();

  return true;
};

export const checkDepositEvent = async (
  contract: Contract,
  receiver: string,
  tokenCollateralAddress: string,
  amountToDeposit: BigNumber
): Promise<boolean> => {
  let depositEvent = new Promise<DepositedCollateralEvent>(
    (resolve, reject) => {
      contract.on('DepositedCollateral', (user, token, amount) => {
        resolve({
          user: user,
          tokenCollateral: token,
          amount: amount,
        });
      });

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  const eventDeposit = await depositEvent;
  expect(eventDeposit.user).to.be.equal(receiver);
  expect(eventDeposit.tokenCollateral).to.be.equal(tokenCollateralAddress);
  expect(eventDeposit.amount).to.be.equal(amountToDeposit);

  contract.removeAllListeners();

  return true;
};

export const checkMintEvent = async (
  contract: Contract,
  sender: string,
  amount: BigNumber
): Promise<boolean> => {
  let mintEvent = new Promise<MintEvent>((resolve, reject) => {
    contract.on('Mint', (user, value) => {
      resolve({
        user: user,
        amountTotal: value,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventMint = await mintEvent;
  expect(eventMint.user).to.be.equal(sender);
  expect(eventMint.amountTotal).to.be.equal(amount);
  contract.removeAllListeners();

  return true;
};

export const checkBurnEvent = async (
  contract: Contract,
  user: string,
  token: string,
  value: BigNumber
): Promise<boolean> => {
  let burnEvent = new Promise<BurnEvent>((resolve, reject) => {
    contract.on('Burn', (sender, token, value) => {
      resolve({
        user: sender,
        token: token,
        value: value,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventBurn = await burnEvent;
  expect(eventBurn.user).to.be.equal(user);
  expect(eventBurn.token).to.be.equal(token);
  expect(eventBurn.value).to.be.equal(value);
  contract.removeAllListeners();

  return true;
};

export const checkWithdrawalEvent = async (
  contract: Contract,
  account: string,
  tokenAddress: string,
  amount: BigNumber
): Promise<boolean> => {
  let withdrawalEvent = new Promise<WithdrawnCollateralEvent>(
    (resolve, reject) => {
      contract.on('WithdrawnCollateral', (account, token, amount) => {
        resolve({
          account: account,
          token: token,
          amount: amount,
        });
      });

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  const eventWithdrawal = await withdrawalEvent;
  expect(eventWithdrawal.account).to.be.equal(account);
  expect(eventWithdrawal.token).to.be.equal(tokenAddress);
  expect(eventWithdrawal.amount).to.be.equal(amount);
  contract.removeAllListeners();

  return true;
};

export const checkFlagLiquidateEvent = async (
  contract: Contract,
  account: string,
  accountKeeper: string,
  endFlagDate: string
): Promise<boolean> => {
  let accountFlaggedEvent = new Promise<AccountFlaggedForLiquidationEvent>(
    (resolve, reject) => {
      contract.on('AccountFlaggedForLiquidation', (account, keeper, end) => {
        resolve({
          account: account,
          keeper: keeper,
          endFlagDate: new Date(end * 1000).getDate().toString(),
        });
      });

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  const eventFlagLiquidate = await accountFlaggedEvent;
  expect(eventFlagLiquidate.account).to.be.equal(account);
  expect(eventFlagLiquidate.keeper).to.be.equal(accountKeeper);
  contract.removeAllListeners();

  return true;
};

export const checkLiquidateEvent = async (
  contractMinter: Contract,
  contractAuctionHouse: Contract,
  user: string,
  keeper: string,
  // amount: number,
  token: string,
  endDateTime: Date
): Promise<boolean> => {
  let liquidateEvent = new Promise<LiquidateEvent>((resolve, reject) => {
    contractMinter.on('Liquidate', (user, keeper, token) => {
      resolve({
        userLiquidated: user,
        keeper: keeper,
        tokenAddress: token,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  let startAuctionHouseEvent = new Promise<StartAuctionHouseEvent>(
    (resolve, reject) => {
      contractAuctionHouse.on(
        'Start',
        (token, keeper, collateralValue, _, endDateTime) => {
          resolve({
            token: token,
            keeper: keeper,
            collateralValue: collateralValue,
            endDateTime: new Date(endDateTime * 1000).getDate(),
          });
        }
      );

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  const auctionHouseStart = await startAuctionHouseEvent;
  expect(auctionHouseStart.token).to.be.equal(token);
  expect(auctionHouseStart.keeper).to.be.equal(keeper);
  // expect(auctionHouseStart.endDateTime).to.be.equal(endDateTime.getDate());

  const eventLiquidate = await liquidateEvent;
  expect(eventLiquidate.userLiquidated).to.be.equal(user);
  expect(eventLiquidate.keeper).to.be.equal(keeper);
  expect(eventLiquidate.tokenAddress).to.be.equal(token);

  contractMinter.removeAllListeners();
  contractAuctionHouse.removeAllListeners();

  return true;
};

export const checkAuctionHouseTakeEvent = async (
  contract: Contract,
  keeper: string,
  receiver: string,
  totalAmount: BigNumber,
  pricePaid: BigNumber
): Promise<boolean> => {
  let eventAuctionHouseTake = new Promise<AuctionHouseTakeEvent>(
    (resolve, reject) => {
      contract.on('Take', (_, keeper, receiver, totalAmount, price, end) => {
        resolve({
          keeper: keeper,
          receiver: receiver,
          totalAmount: totalAmount,
          price: price,
        });
      });

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  const auctionHouseTakeEvent = await eventAuctionHouseTake;
  expect(auctionHouseTakeEvent.keeper).to.be.equal(keeper);
  expect(auctionHouseTakeEvent.receiver).to.be.equal(receiver);
  expect(auctionHouseTakeEvent.totalAmount.toString()).to.be.equal(
    totalAmount.toString()
  );
  expect(auctionHouseTakeEvent.price.toString()).to.be.equal(
    pricePaid.toString()
  );
  contract.removeAllListeners();

  return true;
};

export const checkAddPriceEvent = async (
  contract: Contract,
  sender: string,
  price: BigNumber
): Promise<boolean> => {
  let addPriceEvent = new Promise<AddPriceEvent>((resolve, reject) => {
    contract.on('AddPrice', (sender, price) => {
      resolve({
        sender: sender,
        price: price,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  let eventAddPrice = await addPriceEvent;
  expect(eventAddPrice.sender).to.be.equal(sender);
  expect(eventAddPrice.price.toString()).to.be.equal(price.toString());

  contract.removeAllListeners();

  return true;
};

export const checkChangeEvent = async (
  contract: Contract,
  sender: string,
  contractAddress: string
): Promise<boolean> => {
  let changeEvent = new Promise<ChangeMedianEvent>((resolve, reject) => {
    contract.on('ChangeMedian', (sender, contractAddress) => {
      resolve({
        sender: sender,
        contractAddress: contractAddress,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventBurn = await changeEvent;
  expect(eventBurn.sender).to.be.equal(sender);
  expect(eventBurn.contractAddress).to.be.equal(contractAddress);
  contract.removeAllListeners();

  return true;
};

export const checkCreatePositionEvent = async (
  contract: Contract,
  account: string,
  direction: Number,
  status: Number,
  synthKey: string,
  amount: string
): Promise<boolean> => {
  let addEvent = new Promise<CreatePositionEvent>((resolve, reject) => {
    contract.on('Create', (sender, data) => {
      resolve({
        account: sender,
        data: data,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventAdd = await addEvent;
  expect(eventAdd.data[0]).to.be.equal(account);
  expect(eventAdd.data[1]).to.be.equal(status);
  expect(eventAdd.data[2]).to.be.equal(direction);
  expect(eventAdd.data[3]).to.be.equal(synthKey);
  expect(eventAdd.data[6].toString()).to.be.equal(amount.toString());
  contract.removeAllListeners();

  return true;
};

export const checkFinishPositionWithWinnerOrLoserEvent = async (
  contract: Contract,
  eventType: string,
  account: string,
  direction: number,
  status: number,
  amountToReceive: string
): Promise<boolean> => {
  let winnerOrLoserEvent = new Promise<WinnerOrLoserEvent>(
    (resolve, reject) => {
      contract.on(eventType, (sender, amountToReceive) => {
        resolve({
          account: sender,
          amountToReceive: amountToReceive,
        });
      });

      setTimeout(() => {
        reject(new Error('timeout'));
      }, 60000);
    }
  );

  let finishEvent = new Promise<FinishPositionEvent>((resolve, reject) => {
    contract.on('Finish', (account, direction, status) => {
      resolve({
        account,
        direction,
        status,
      });
    });

    setTimeout(() => {
      reject(new Error('timeout'));
    }, 60000);
  });

  const eventWinnerOrLoser = await winnerOrLoserEvent;
  expect(eventWinnerOrLoser.account).to.be.equal(account);
  expect(
    (Number(eventWinnerOrLoser.amountToReceive.toString()) / 10 ** 18).toFixed(
      2
    )
  ).to.be.equal(amountToReceive);

  const eventFinish = await finishEvent;
  expect(eventFinish.account).to.be.equal(account);
  expect(eventFinish.direction).to.be.equal(direction);
  expect(eventFinish.status).to.be.equal(status);

  contract.removeAllListeners();

  return true;
};
