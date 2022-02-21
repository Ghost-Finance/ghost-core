import { JsxElement } from 'typescript';
import image from '../../../assets/wallet/metamask.png';
import hooks from '../../../hooks/walletConnect';

const metamaskProvider = process?.env?.METAMASK_PROVIDER || '';

export default () => {
  const { connectWallet } = hooks();
  const onClick = () => {
    connectWallet(metamaskProvider);
  };
  return {
    image,
    label: 'MetaMask',
    onClick,
  };
};
