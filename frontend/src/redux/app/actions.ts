import { Types } from './';

export const setTxSucces = (txSuccess: null | boolean) => ({
  type: Types.SET_TXSUCCESS,
  txSuccess,
});

export const setCRatio = ({
  cRatioValue,
  balanceOfGho,
  balanceOfGdai,
  collateralBalance,
  synthDebt,
  collateralBalancePrice,
  synthDebtPrice,
}: any) => ({
  type: Types.SET_CRATIO,
  cRatioValue,
  balanceOfGho,
  balanceOfGdai,
  collateralBalance,
  synthDebt,
  collateralBalancePrice,
  synthDebtPrice,
});

export const setCRatioSimulateMint = (
  cRatioSimulateValue: null | string,
  collateralBalance: null | string,
  synthDebt: null | string
) => ({
  type: Types.SET_CRATIO_SIMULATE_MINT,
  cRatioSimulateValue,
  collateralBalance,
  synthDebt,
});

export const setCRatioSimulateBurn = (
  cRatioSimulateValue: null | string,
  synthDebt: null | string
) => ({
  type: Types.SET_CRATIO_SIMULATE_BURN,
  cRatioSimulateValue,
  synthDebt,
});

export const setStatus = (status: string) => ({
  type: Types.SET_STATUS,
  status,
});

export const setBalanceOfGHO = (balanceOfGho: null | string) => ({
  type: Types.SET_BALANCE_OF_GHO,
  balanceOfGho,
});

export const setBalanceOfGDAI = (balanceOfGDai: null | string) => ({
  type: Types.SET_BALANCE_OF_GDAI,
  balanceOfGDai,
});
