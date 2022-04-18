import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/containers/ProductList.scss';
// import Categories from '../components/Categories';
import { useSelector } from 'react-redux';

export const ProductList = () => {
  const { products, bestSellers } = useSelector((state) => state);

  return (
    <section className='product-list'>
      <div className='container__productList'>
        {bestSellers.map((product) => (
          <CardItem key={product.id} product={product} bestSellers />
        ))}

        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
