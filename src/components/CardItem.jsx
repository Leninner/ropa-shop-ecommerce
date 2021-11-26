import React from 'react';
import '../assets/styles/components/CardItem.scss';
import addToCart from '../assets/images/icons/bt_add_to_cart.svg';
import addedToCart from '../assets/images/icons/bt_added_to_cart.svg';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart } from '../actions';
import classNames from 'classnames';

const CardItem = (props) => {
  const { product, cart, bestSellers } = props;

  const cardItem = classNames('card-item', {
    bestSellers,
  });

  const toggleCart = (item) => {
    if (!cart.includes(item)) {
      props.addItemToCart(item);
    } else {
      props.deleteItemsFromCart(item.id);
    }
  };

  return (
    <div className={cardItem}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <button>
        <figure onClick={() => toggleCart(product)}>
          <img src={cart.includes(product) ? addedToCart : addToCart} alt='carrito' />
        </figure>
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
  deleteItemsFromCart,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

// FIXME: Pasar el estado de added para la vista de todos los productos
