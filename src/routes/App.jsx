import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/styles/Global.scss';
import { AppContext } from '../context';
import { useSumaTotal } from '../hooks/useSumaTotal';
const Home = React.lazy(() => import('../pages/Home'));
const CheckoutList = React.lazy(() => import('../containers/CheckoutList'));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));

const App = () => {
  const initialState = useSumaTotal();

  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckoutList />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </Suspense>
  );
};

export { App };
