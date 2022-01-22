import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashScreen, Dashboard } from 'pages';

import '@theme/global/normalize.scss';
import '@theme/global/global.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SplashScreen />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
