import React, { useContext } from 'react';
import { MainModal } from '../components/MainModal';
import { ProductList } from '../containers/ProductList';
import { Layout } from '../containers/Layout';
import { AppContext } from '../context';

const Home = () => {
  const { setMenuOptions, setToggleMenu } = useContext(AppContext);

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
        <ProductList />
      </div>
    </Layout>
  );
};

export default Home;
