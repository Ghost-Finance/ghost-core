export const convertCurrency = (value: number | string) => {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
