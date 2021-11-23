import React from 'react';
import { MainModal } from '../components/MainModal';
import { ProductList } from '../containers/ProductList';

const Home = () => {
  return (
    <div>
      <MainModal />
      <ProductList />
    </div>
  );
};

export { Home };
