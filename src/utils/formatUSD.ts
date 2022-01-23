type FormatUSDOptions = {
  decimals?: number;
};

const formatUSD = (value: string | number, { decimals }: FormatUSDOptions = { decimals: 2 }): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals,
  });

  return formatter.format(+value);
};

export default formatUSD;
