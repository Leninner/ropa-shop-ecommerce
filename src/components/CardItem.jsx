import React, { useState } from 'react';
import '../assets/styles/components/CardItem.scss';
import addToCart from '../assets/images/icons/bt_add_to_cart.svg';
import addedToCart from '../assets/images/icons/bt_added_to_cart.svg';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart } from '../actions';
import classNames from 'classnames';

const CardItem = (props) => {
  const { id, name, price, description, image, bestSellers } = props;

  const cardItem = classNames('card-item', {
    bestSellers,
  });

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(!added);
    if (!added) {
      props.addItemToCart({ id, name, price, description, image });
    } else {
      props.deleteItemsFromCart(id);
    }
  };

  return (
    <div className={cardItem}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button>
        <img src={!added ? addToCart : addedToCart} alt='carrito' onClick={handleAddToCart} />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
  deleteItemsFromCart,
};

export default connect(null, mapDispatchToProps)(CardItem);

// FIXME: Pasar el estado de added para la vista de todos los productos
