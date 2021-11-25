import React from 'react';
import { CardItem } from '../components/CardItem';
import classNames from 'classnames';
import '../assets/styles/containers/ProductList.scss';
import { connect } from 'react-redux';

const ProductList = ({ allItems, setModal, modal, products }) => {
  const productListClass = classNames('product-list', {
    allItems,
  });

  return (
    <section className={productListClass}>
      <div>
        {products.map((product) => {
          return <CardItem key={product.id} {...product} />;
        })}
      </div>

      {modal && <button onClick={setModal}>View All Products</button>}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductList);
