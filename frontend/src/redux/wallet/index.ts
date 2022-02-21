import { NetworkNames } from '../../config/enums';

export const Types = {
  SET_CONNECTION: '@WALLET/SET_CONNECTION',
  SET_LOADING_WALLET: '@WALLET/SET_LOADING_WALLET',
  SET_ACCOUNT: '@WALLET/SET_ACCOUNT',
  SET_NETWORK: '@WALLET/SET_NETWORK',
};

type TState = {
  connected?: boolean;
  loaded?: boolean;
  loadingWallet?: boolean;
  account?: string | null;
  network?: NetworkNames;
};

type TAction = {
  type: string;
} & TState;

const initialState: TState = {
  connected: false,
  loaded: false,
  loadingWallet: false,
  account: null,
};

export default (state: TState = initialState, action: TAction) => {
  const { type, connected, loadingWallet, account, network } = action;
  switch (type) {
    case Types.SET_CONNECTION:
      return {
        ...state,
        connected,
      };
    case Types.SET_LOADING_WALLET:
      return {
        ...state,
        loadingWallet,
      };
    case Types.SET_ACCOUNT:
      return {
        ...state,
        account,
      };
    case Types.SET_NETWORK:
      return {
        ...state,
        network,
      };
    default:
      return state;
  }
};
