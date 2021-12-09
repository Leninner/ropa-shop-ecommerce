import React from 'react';
import '../assets/styles/components/CardItem.scss';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Options from './Options';
import ToggleCart from './ToggleCart';

const CardItem = (props) => {
  const { product, bestSellers } = props;

  const cardItem = classNames('card-item', {
    bestSellers,
  });

  return (
    <div className={cardItem}>
      <div className='slider'>
        <ul>
          {product.images.map((image, index) => {
            return (
              <li key={index}>
                <img src={image} alt='product' />
              </li>
            );
          })}
        </ul>
      </div>
      <h2>{product.name}</h2>

      <Options product={product} />

      <ToggleCart product={product} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CardItem);
