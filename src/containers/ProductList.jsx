import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/components/ProductList.scss';
import classNames from 'classnames';

const ProductList = ({ isLogin, setModal, modal }) => {
  const productList = classNames('product-list', {
    isLogin,
  });

  return (
    <section className={productList}>
      <div>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      {modal && <button onClick={setModal}>View All Products</button>}
    </section>
  );
};

export { ProductList };
