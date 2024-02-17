import { Coin } from '../types/CoinType';

export const containsPrivacy = (str: any): boolean => str.includes('privacy');

export const pluckCoinNames = (coins: Coin[]) => coins.map(coin => coin.name);

export const formatToDollars = (value: number): string => {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

export const splitMoneyNumber = (moneyNumber: string): [string, string] => {
  // Split the number by the decimal point
  const parts = moneyNumber.toString().split('.');

  // The integer part is the first element of the array
  // The decimal part is the second element (if exists), or default to '0'
  const integerPart = parts[0];
  const decimalPart = parts[1] || '0';

  return [integerPart, decimalPart];
};

function getOrdinalNum(n: any) {
  return (
    n +
    (n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '')
  );
}

export const formatDate = (): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const now = new Date();
  const month = months[now.getMonth()];
  const day = getOrdinalNum(now.getDate());
  const year = now.getFullYear();

  return `${month} ${day} ${year}`;
};

export const multiplyPriceByPosition = (
  price: string,
  position: number
): string => {
  // Remove commas from the price string and then convert to a number
  let numericPrice = Number(price.replace(/,/g, ''));
  let result = numericPrice * position;

  // Format the result with commas for thousands
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(result);
};
