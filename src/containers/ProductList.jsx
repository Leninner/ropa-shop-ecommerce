import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/containers/ProductList.scss';
import { useSelector } from 'react-redux';
import { CategoriesFilter } from '../components/CategoriesFilter';

export const ProductList = () => {
  const { products, currentCategory } = useSelector((state) => state);

  console.log(currentCategory);

  const filteredProducts = products.filter(
    (product) =>
      (currentCategory === 'all' || product.category === currentCategory) &&
      Object.entries(product.tallas).some(([, { stock }]) => stock > 0)
  );

  return (
    <section className='product-list'>
      <CategoriesFilter />

      <div className='container__productList'>
        {filteredProducts.length ? (
          filteredProducts.map((product) => <CardItem key={product.id} product={product} />)
        ) : (
          <div className='any-product'>No hay productos</div>
        )}
      </div>
    </section>
  );
};
