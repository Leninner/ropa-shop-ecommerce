import React, { useState } from 'react';
import { MainModal } from '../components/MainModal';
import ProductList from '../containers/ProductList';
import { Footer } from '../components/Footer';

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <MainModal />
      <ProductList setModal={handleModal} modal />
      {modal && <ProductList allItems />}
      <Footer />
    </div>
  );
};

export { Home };
