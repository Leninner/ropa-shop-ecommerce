import React from 'react';
import { MainModal } from '../components/MainModal';
import { ProductList } from '../containers/ProductList';
import MenuOptions from '../components/MenuOptions';

const Home = () => {
  return (
    <div>
      <MainModal />
      <ProductList />
      <MenuOptions />
    </div>
  );
};

export { Home };
