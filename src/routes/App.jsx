import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import '../assets/styles/Global.scss';
import { AppContext } from '../context';
import { useSumaTotal } from '../hooks/useSumaTotal';

const App = () => {
  const initialState = useSumaTotal();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
