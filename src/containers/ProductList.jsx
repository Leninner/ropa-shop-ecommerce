import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/components/ProductList.scss';

const ProductList = () => {
  return (
    <div className='product-list'>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <button>View All Products</button>
    </div>
  );
};

export { ProductList };
