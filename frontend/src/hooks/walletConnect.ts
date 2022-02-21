import { useEffect } from 'react';
import Web3 from 'web3';
import { useDispatch, useSelector } from '../redux/hooks';
import {
  setAccount,
  setConnection,
  setLoadingWallet,
  setNetwork,
} from '../redux/wallet/actions';
import { getNetworkNameFromId } from '../utils/Network';

declare global {
  interface Window {
    ethereum: any | undefined;
  }
}

const web3 = new Web3();
const { ethereum } = window;

export default () => {
  const wallet = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const reloadPage = () => window.location.reload();
  const changeNetwork = (chainId: any): void => {
    console.log('chainChanged -> ', chainId);
    dispatch(setNetwork(getNetworkNameFromId(window?.ethereum?.chainId)));
  };
  const changeAccount = (accounts: string[] | null): void => {
    dispatch(setAccount(accounts?.length ? accounts[0] : null));
    dispatch(setConnection(accounts?.length ? accounts?.length > 0 : false));
  };

  const listeners = async () => {
    ethereum?.on('chainChanged', (chainId: any) => {
      changeNetwork(chainId);
      reloadPage();
    });
    ethereum?.on('disconnect', async () => {
      reloadPage();
    });
    ethereum?.on('accountsChanged', (accounts: string[] | null) => {
      changeAccount(accounts);
      reloadPage();
    });
    ethereum?.on('connect', async () => {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      changeNetwork(chainId);
      changeAccount(accounts);
    });
    if (ethereum?.selectedAddress) {
      changeAccount([ethereum?.selectedAddress]);
    }

    if (ethereum?.chainId) {
      changeNetwork(ethereum?.chainId);
    }
  };

  const isMetaMaskInstalled = (): boolean => {
    const { isMetaMask } = ethereum || false;
    return isMetaMask;
  };

  const connectWallet = async (provider: any) => {
    if (!isMetaMaskInstalled) return;
    if (wallet?.loadingWallet) return;
    web3.setProvider(provider);
    try {
      dispatch(setLoadingWallet(true));
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
        params: [{ eth_accounts: {} }],
      });
      if (accounts?.length) changeAccount(accounts);
    } catch (e) {}
    dispatch(setLoadingWallet(false));
  };

  useEffect(() => {
    listeners();
  }, []);

  return {
    wallet,
    connectWallet,
  };
};
