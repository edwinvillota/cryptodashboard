import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SidemenuTemplate } from '@components/templates';
import { Header, Details } from './components';
import { useActions, useAppSelector } from '@hooks';
import { selectCoinsState } from '@app/features/coins';
import './CoinDetails.scss';
import { Spinner } from '@components/atoms';

const CoinDetails: FC = () => {
  const { coinId } = useParams();
  const actions = useActions();
  const coinsState = useAppSelector(selectCoinsState);
  const { detail: coin } = coinsState;

  useEffect(() => {
    if (coinId) {
      actions.getCoinById({ id: coinId });
    }
  }, []);

  return (
    <SidemenuTemplate>
      <SidemenuTemplate.Content fullPage>
        <main className="CoinDetails--container">
          <Header coinName={coin?.name} symbol={coin?.symbol} />
          <section className="CoinDetails--wrapper">
            {coin ? <Details coin={coin} /> : <Spinner className="CoinDetails--loading" />}
          </section>
        </main>
      </SidemenuTemplate.Content>
    </SidemenuTemplate>
  );
};

export default CoinDetails;
