import React, { useState } from 'react';
import { MainModal } from '../components/MainModal';
import ProductList from '../containers/ProductList';
import { Footer } from '../components/Footer';
import { Layout } from '../containers/Layout';

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Layout
      title='Home | Ropa Shop 🐱‍🚀'
      subtitle='Con la mejor calidad de nuestros artesanos ecuatorianos llega Ropa Shop'>
      <div>
        <MainModal />
        <ProductList setModal={handleModal} modal />
        {modal && <ProductList allItems />}
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
