import React, { FC } from 'react';
import { Coin } from '@models';
import clx from 'classnames';
import { CoinPropsProps } from './CoinProps.props';
import './CoinProps.scss';

const formatCoinKey = (key: string): string => {
  return key.replaceAll('_', ' ');
};

const CoinProps: FC<CoinPropsProps> = ({ coin, className }) => {
  const keys = Object.keys(coin) as Array<keyof Coin>;

  return (
    <section className={clx('CoinProps--container', className)}>
      {keys.map(
        (key) =>
          coin[key] && (
            <div className="CoinProps--prop">
              <h3 className="CoinProps--key">{formatCoinKey(key)}</h3>
              <span className="CoinProps--value">{coin[key]}</span>
            </div>
          ),
      )}
    </section>
  );
};

export default CoinProps;
