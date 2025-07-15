import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
