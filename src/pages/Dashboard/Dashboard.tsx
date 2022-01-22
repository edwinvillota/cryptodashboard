import React, { FC } from 'react';
import { SidemenuTemplate } from '@components/templates';
import { CoinList } from '@components/organisms';
import { Header, Filters } from './components';
import './Dashboard.scss';

const Dashboard: FC = () => {
  return (
    <SidemenuTemplate>
      <SidemenuTemplate.Aside />
      <SidemenuTemplate.Content>
        <main className="Dashboard--container">
          <Header />
          <h1 className="Dashboard--title">Coins</h1>
          <Filters />
          <CoinList />
        </main>
      </SidemenuTemplate.Content>
    </SidemenuTemplate>
  );
};

export default Dashboard;
