import React, { useState, useContext } from 'react';
import { MainModal } from '../components/MainModal';
import { ProductList } from '../containers/ProductList';
import { Footer } from '../components/Footer';
import { Layout } from '../containers/Layout';
import { AppContext } from '../context';

const Home = () => {
  const [modal, setModal] = useState(false);
  const { setMenuOptions, setToggleMenu } = useContext(AppContext);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleClickMenuOptions = () => {
    setMenuOptions(false);
    setToggleMenu(false);
  };

  return (
    <Layout
      title='Home | Ropa Shop 🐱‍🚀'
      subtitle='Con la mejor calidad de nuestros artesanos ecuatorianos llega Ropa Shop'
    >
      <div onClick={handleClickMenuOptions}>
        <MainModal />
        <ProductList setModal={handleModal} modal />
        {modal && <ProductList allItems />}
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
