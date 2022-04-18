import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/containers/ProductList.scss';
// import Categories from '../components/Categories';
import { useSelector } from 'react-redux';

export const ProductList = () => {
  const { products, bestSellers } = useSelector((state) => state);

  return (
    <section className='product-list'>
      <p className='feedback'>
        {window.innerWidth > 768 ? 'Pasa el mouse por encima para ver más fotos' : 'Scroll a las fotos'}
      </p>

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
