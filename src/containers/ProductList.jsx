import React from 'react';
import CardItem from '../components/CardItem';
import classNames from 'classnames';
import '../assets/styles/containers/ProductList.scss';
import { connect } from 'react-redux';

const ProductList = ({ allItems, setModal, modal, products, bestSellers }) => {
  const productListClass = classNames('product-list', {
    allItems,
  });

  return (
    <section className={productListClass} id='allProducts'>
      {modal ? (
        <>
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
        <div className='container__allProducts'>
          {products.map((product) => {
            return <CardItem key={product.id} product={product} />;
          })}
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    bestSellers: state.bestSellers,
  };
};

export default connect(mapStateToProps, null)(ProductList);
