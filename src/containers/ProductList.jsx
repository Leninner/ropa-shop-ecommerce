import React from 'react';
import { CardItem } from '../components/CardItem';
import classNames from 'classnames';
import '../assets/styles/containers/ProductList.scss';
import Categories from '../components/Categories';
import { useSelector } from 'react-redux';

export const ProductList = ({ allItems, setModal, modal }) => {
  const productListClass = classNames('product-list', {
    allItems,
  });
  const { products, bestSellers, byCategory } = useSelector((state) => state);

  return (
    <section className={productListClass} id='allProducts'>
      {modal ? (
        <>
          <p className='feedback'>Pasa el mouse por encima para ver más fotos</p>

          <div className='container__productList'>
            {bestSellers.map((product) => {
              return <CardItem key={product.id} product={product} bestSellers />;
            })}
          </div>
          <button className='product-list_button' onClick={setModal}>
            View All Products
          </button>
        </>
      ) : (
        <>
          <Categories />
          <p className='feedback'>Pasa el mouse por encima para ver más fotos</p>
          {byCategory.length ? (
            <div className='container__allProducts'>
              {byCategory.map((product) => {
                return <CardItem key={product.id} product={product} />;
              })}
            </div>
          ) : (
            <div className='container__allProducts'>
              {products.map((product) => {
                return <CardItem key={product.id} product={product} />;
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
};
