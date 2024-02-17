import { multiplyPriceByPosition } from '@/common/utils/formatters';

interface Coin {
  name: string;
  symbol: string;
  price: string;
  position: number;
}

interface CoinBlockProps {
  coin: Coin;
}

export default function CoinBlockProps({ coin }: CoinBlockProps) {
  return (
    <div>
      <div>{coin.price}</div>
      <div>{coin.position}</div>
      <div>{coin.symbol}</div>
      <div>Value</div>
      <div>{multiplyPriceByPosition(coin.price, coin.position)}</div>
    </div>
  );
}
