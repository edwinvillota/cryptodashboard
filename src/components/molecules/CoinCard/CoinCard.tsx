import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CoinCardProps } from './Coincard.props';
import { ChangeIndicator } from '@components/atoms';
import { formatUSD } from '@utils';
import './CoinCard.scss';

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
  return (
    <Link className="CoinCard--container" to={`/coin/${coin.id}`}>
      <div className="CoinCard--row">
        <h1 className="CoinCard--symbol">{coin.symbol}</h1>
        <span className="CoinCard--name">
          {coin.name} <span className="CoinCard--rank">{coin.rank}</span>
        </span>
      </div>
      <div className="CoinCard--row">
        <h2 className="CoinCard--usd">{formatUSD(coin.price_usd)}</h2>
        <div className="CoinCard--column">
          <ChangeIndicator value={coin.percent_change_24h} frequency="24h" />
          <ChangeIndicator value={coin.percent_change_7d} frequency="7d" />
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
