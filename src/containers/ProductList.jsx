import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/components/ProductList.scss';
import classNames from 'classnames';

const ProductList = ({ isLogin, isRegister }) => {
  const productList = classNames('product-list', {
    isLogin,
    isRegister,
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

      <button>View All Products</button>
    </section>
  );
};

export { ProductList };