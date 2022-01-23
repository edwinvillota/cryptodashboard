import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from 'pages';
import { Provider } from 'react-redux';
import { store } from '@app/store';

import '@theme/global/normalize.scss';
import '@theme/global/global.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
