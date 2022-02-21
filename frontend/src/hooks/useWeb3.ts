import { useEffect, useState, useRef } from 'react';
import Web3 from 'web3';

const metamaskProvider = process?.env?.METAMASK_PROVIDER || '';

const httpProvider = new Web3.providers.HttpProvider(metamaskProvider, {
  timeout: 10000,
});

const useWeb3 = () => {
  const { ethereum } = (window || {}) as any;
  const refEth = useRef(ethereum);
  const [web3, setweb3] = useState(new Web3(ethereum || httpProvider));

  useEffect(() => {
    if (ethereum !== refEth.current) {
      setweb3(new Web3(ethereum || httpProvider));
      refEth.current = ethereum;
    }
  }, [ethereum]);

  return web3;
};

export default useWeb3;
