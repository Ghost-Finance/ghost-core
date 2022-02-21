import { useEffect, useState } from 'react';
import hooks from './walletConnect';
const { wallet } = hooks();

const useAllowance = (
  tokenContract: any,
  spenderAddress: string,
  dependency: any
) => {
  const { account } = wallet;
  const [allowance, setAllowance] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods
          .allowance(account, spenderAddress)
          .call();
        setAllowance(res);
      } catch (e) {
        setAllowance(null);
      }
    };
    fetch();
  }, [account, spenderAddress, tokenContract, dependency]);

  return allowance;
};

export default useAllowance;
