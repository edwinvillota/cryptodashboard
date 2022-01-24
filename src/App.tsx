import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, CoinDetails } from 'pages';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { getAllCoins } from '@app/features/coins';

import '@theme/global/normalize.scss';
import '@theme/global/global.scss';

store.dispatch(getAllCoins());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/coin/:coinId" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
