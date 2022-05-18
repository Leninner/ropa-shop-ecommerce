import React from 'react';
import { CardItem } from '../components/CardItem';
import '../assets/styles/containers/ProductList.scss';
import { useSelector } from 'react-redux';
import { CategoriesFilter } from '../components/CategoriesFilter';

export const ProductList = () => {
  const state = useSelector((state) => state);

  const { products, currentCategory, cart } = state;

  const filteredProducts = products.filter(
    (product) =>
      ((currentCategory === 'all' || product.category === currentCategory) &&
        Object.entries(product.tallas).some(([, { stock }]) => stock > 0)) ||
      Object.entries(products).some((product) => {
        const cartIncludes = { id: product[1].id };

        return cart.some(({ id }) => id === cartIncludes.id);
      })
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
