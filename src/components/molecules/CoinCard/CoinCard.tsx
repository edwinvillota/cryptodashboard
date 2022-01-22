import React, { FC } from 'react';
import { CoinCardProps } from './Coincard.props';

const CoinCard: FC<CoinCardProps> = ({ coin }) => {
  return <div>{coin.name}</div>;
};

export default CoinCard;
