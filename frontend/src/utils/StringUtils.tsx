import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';

export const shortenAddress = (address: string) => {
  if (address.length < 10) return address;

  let displayAddress = address.substr(0, 6);
  displayAddress += '...' + address.substr(-4);
  return displayAddress;
};

/**
 * Converts an ethers.BigNumber to vanilla JS "number"
 */
export const bigNumberToFloat = (bNumber: BigNumber) => {
  const etherBalance = formatEther(bNumber || BigNumber.from('0'));
  return parseFloat(etherBalance);
};

export const bigNumberToString = (bNumber: BigNumber | string) => {
  const etherBalance = formatEther(bNumber || BigNumber.from('0'));
  return String(etherBalance);
};

export const stringToBigNumber = (value: string) => {
  return BigNumber.from(formatEther(value));
};

/**
 * Formats a number to a currency string
 *
 * Taken from: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string/14428340#14428340
 *
 * @param number bal: balance to format
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
export const formatBalance = (
  bal: number,
  n = 2,
  x = 3,
  s = ',',
  c?: string
) => {
  const re = '\\d(?=(\\d{' + x + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = bal.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + s);
};

export const formatCurrency = (
  value = 0,
  type = 'en-US',
  style = 'currency',
  currency = 'USD'
) => {
  return new Intl.NumberFormat(type, {
    style: style,
    currency: currency,
    useGrouping: true,
  }).format(value);
};
