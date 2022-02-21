import { Contract } from 'web3-eth-contract';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther, parseUnits } from '@ethersproject/units';

let oneEther = BigNumber.from(parseEther('1'));
let cRatio = BigNumber.from(parseEther('9'));

export const mint =
  (
    contract: Contract,
    token: string,
    amountToDeposit: string,
    amountToMint: string,
    account: string
  ) =>
  (dispatch: any) => {
    const depositAmount = BigNumber.from(parseEther(amountToDeposit));
    const mintAmount = BigNumber.from(parseEther(amountToMint));

    contract.methods
      .mint(token, depositAmount, mintAmount)
      .send({ from: account })
      .once('confirmation', () => {
        dispatch('finish');
      })
      .on('error', (error: any) => dispatch('error'));
  };

export const burn =
  (contract: Contract, token: string, amount: string, account: string) =>
  (dispatch: any) => {
    const burnAmount = BigNumber.from(parseEther(amount));

    return contract.methods
      .burn(token, burnAmount)
      .send({ from: account })
      .once('confirmation', (data: any) => {
        dispatch('finish');
      })
      .on('error', (error: any) => dispatch('error'));
  };

export const approve =
  (contract: Contract, sender: string, account: string, amount: string) =>
  (dispatch: any) => {
    dispatch('idle');
    const bigAmount = BigNumber.from(parseEther(amount));
    return contract.methods
      .approve(account, bigAmount)
      .send({ from: sender })
      .once('sent', () => {
        dispatch('confirm');
      })
      .on('transactionHash', () => {
        dispatch('waiting');
      })
      .on('Approve', (data: any) => {
        return data;
      })
      .on('error', (error: any) => dispatch('error'));
  };

export const depositCollateral = async (
  token: string,
  amount: string,
  contract: Contract,
  account: string
) => {
  const bigAmount = BigNumber.from(parseEther(amount));
  return contract.methods
    .depositCollateral(token, bigAmount)
    .send({ from: account })
    .on('DepositedCollateral', (user: any) => {
      return user;
    });
};

export const balanceOf = async (contract: Contract, account: string) => {
  return contract.methods.balanceOf(account).call();
};

export const getCRatio = async (
  contract: Contract,
  token: string,
  account: string
) => {
  return contract.methods.getCRatio(token).call({ from: account });
};

export const maximumByCollateral = async (
  contract: Contract,
  token: string,
  account: string,
  amount: string
) => {
  const value = BigNumber.from(parseEther(amount));
  const expectedGdaiAmount = await contract.methods
    .maximumByCollateral(token, value)
    .call({ from: account });
  const synthDebt = await contract.methods
    .synthDebt(account, token)
    .call({ from: account });

  return BigNumber.from(parseUnits(expectedGdaiAmount.toString()))
    .sub(BigNumber.from(parseUnits(synthDebt.toString())))
    .div(oneEther.toString());
};

export const maximumByDebt = async (amount: string) => {
  return BigNumber.from(parseEther(amount))
    .mul(cRatio.toString())
    .div(oneEther.toString());
};

export const simulateMint = async (
  contract: Contract,
  token: string,
  account: string,
  amountGHO: string,
  amountGdai: string,
  feedPriceGho: BigNumber,
  feedPriceGdai: BigNumber
) => {
  const ghoAmount = BigNumber.from(parseUnits(amountGHO));
  const gdaiAmount = BigNumber.from(parseUnits(amountGdai));

  const synthDebt = await contract.methods
    .synthDebt(account, token)
    .call({ from: account });
  const collateralValue = await contract.methods
    .collateralBalance(account, token)
    .call({ from: account });
  const collateralBalance = BigNumber.from(
    parseUnits(collateralValue.toString())
  ).add(parseUnits(ghoAmount.toString()));
  const debtAmount = BigNumber.from(parseUnits(synthDebt.toString())).add(
    parseUnits(gdaiAmount.toString())
  );
  return calculateCRatio(
    collateralBalance,
    debtAmount,
    feedPriceGho,
    feedPriceGdai
  );
};

export const simulateBurn = async (
  contract: Contract,
  token: string,
  account: string,
  amountGdai: string,
  feedPriceGho: BigNumber,
  feedPriceGdai: BigNumber
) => {
  const gdaiAmount = BigNumber.from(parseUnits(amountGdai));
  const synthDebt = await contract.methods
    .synthDebt(account, token)
    .call({ from: account });
  const collateralValue = await contract.methods
    .collateralBalance(account, token)
    .call({ from: account });

  const collateralBalance = BigNumber.from(
    parseUnits(collateralValue.toString())
  );
  const debtAmount = BigNumber.from(parseEther(synthDebt)).sub(
    parseUnits(gdaiAmount.toString())
  );

  return calculateCRatio(
    collateralBalance,
    debtAmount,
    feedPriceGho,
    feedPriceGdai
  );
};

export const feedPrice = async (contract: Contract) => {
  return contract.methods.price().call();
};

export const collateralBalance = async (
  contract: Contract,
  token: string,
  account: string
) => {
  return contract.methods
    .collateralBalance(account, token)
    .call({ from: account });
};

export const synthDebtOf = async (
  contract: Contract,
  token: string,
  account: string
) => {
  return contract.methods.synthDebt(account, token).call({ from: account });
};

export const promiseAll = async (
  allPromise: any,
  successCallback: any,
  errorCallback: any
) => {
  return Promise.all(allPromise).then(successCallback).catch(errorCallback);
};

export const calculateCRatio = async (
  collateralBalance: BigNumber,
  debtAmount: BigNumber,
  feedPriceGho: BigNumber,
  feedPriceGdai: BigNumber
) => {
  const collaterlaValue = collateralBalance.mul(
    parseUnits(feedPriceGho.toString())
  );
  const debtValue = debtAmount.mul(parseUnits(feedPriceGdai.toString()));
  return [
    collaterlaValue
      .mul(parseUnits(oneEther.toString()))
      .div(parseUnits(debtValue.toString())),
    collateralBalance.div(parseUnits(oneEther.toString())),
    debtAmount.div(parseUnits(oneEther.toString())),
  ];
};
