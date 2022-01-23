import React, { FC } from 'react';
import { CoinCard } from '@components/molecules';
import { useAppSelector } from '@hooks';
import { selectCoinsState } from '@app/features/coins';
import './CoinList.scss';

const CoinList: FC = () => {
  const coinsState = useAppSelector(selectCoinsState);

  return (
    <main className="CoinList--container">
      <section className="CoinList--grid">
        {coinsState.data.map((coin) => (
          <CoinCard coin={coin} />
        ))}
      </section>
    </main>
  );
};

export default CoinList;
