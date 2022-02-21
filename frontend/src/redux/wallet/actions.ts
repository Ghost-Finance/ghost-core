import { Types } from './';
import { NetworkNames } from '../../config/enums';

export const setConnection = (connected: boolean) => ({
  type: Types.SET_CONNECTION,
  connected,
});

export const setLoadingWallet = (loadingWallet: boolean) => ({
  type: Types.SET_LOADING_WALLET,
  loadingWallet,
});

export const setAccount = (account: null | string) => ({
  type: Types.SET_ACCOUNT,
  account,
});

export const setNetwork = (network: NetworkNames) => ({
  type: Types.SET_NETWORK,
  network,
});
