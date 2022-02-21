import { useEffect, useState } from 'react';
import minterAbi from '../contracts/Minter.json';
import ghoABI from '../contracts/GHO.json';
import feedABI from '../contracts/Feed.json';
import useWeb3 from './useWeb3';
import contractAddress from '../contracts/contract-address.json';

const useContract = (abi: any, address: string) => {
  const web3 = useWeb3();
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address));

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address));
  }, [abi, address, web3]);

  return contract;
};

export const useMinter = () => {
  return useContract(minterAbi.abi, contractAddress.Minter);
};

export const useERC20 = (address: string) => {
  return useContract(ghoABI.abi, address);
};

export const useFeed = (feedAddress: string) => {
  return useContract(feedABI.abi, feedAddress);
};

export default useContract;
