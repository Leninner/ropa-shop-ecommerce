import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/components/ProductList.scss';

const ProductList = () => {
  return (
    <section className='product-list'>
      <div className='product-list__container'>
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

      <button className='seeMore'>View All Products</button>
    </section>
  );
};

export { ProductList };
