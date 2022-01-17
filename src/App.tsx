import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@theme/global/normalize.scss';
import '@theme/global/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<span>Hello</span>} />
      </Routes>
    </Router>
  );
};

export default App;
