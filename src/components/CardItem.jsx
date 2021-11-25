import React, { useState } from 'react';
import '../assets/styles/components/CardItem.scss';
import addToCart from '../assets/images/icons/bt_add_to_cart.svg';
import addedToCart from '../assets/images/icons/bt_added_to_cart.svg';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart } from '../actions';

const CardItem = (props) => {
  const { id, name, price, description, image } = props;

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
    <div className='card-item'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button>
        <img src={!added ? addToCart : addedToCart} alt='carrito' onClick={handleAddToCart} />
      </button>
    </div>
  );
};

// FIXME: Arreglar la vista de productlist y carditem

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
