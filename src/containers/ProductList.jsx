import React from 'react';
import { CardItem } from '../components/CardItem';
import classNames from 'classnames';
import '../assets/styles/containers/ProductList.scss';

const ProductList = ({ allItems, setModal, modal }) => {
  const productListClass = classNames('product-list', {
    allItems,
  });

  return (
    <section className={productListClass}>
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
