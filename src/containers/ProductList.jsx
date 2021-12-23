import React from 'react';
import CardItem from '../components/CardItem';
import classNames from 'classnames';
import '../assets/styles/containers/ProductList.scss';
import { connect } from 'react-redux';
import Categories from '../components/Categories';

const ProductList = ({ allItems, setModal, modal, products, bestSellers, byCategory }) => {
  const [category, setCategory] = React.useState(false);

  console.log(category);

  const handleCategory = () => {
    setCategory(true);
  };

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
        <>
          <Categories onClick={handleCategory} />
          {category ? (
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    bestSellers: state.bestSellers,
    byCategory: state.byCategory,
  };
};

export default connect(mapStateToProps, null)(ProductList);
