import React from 'react';
import '../assets/styles/components/CardItem.scss';
import addToCart from '../assets/images/icons/bt_add_to_cart.svg';
import addedToCart from '../assets/images/icons/bt_added_to_cart.svg';

const CardItem = ({ image, name }) => (
  <div className='card-item'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <button>
      <img src={addToCart} alt='carrito' />
      <img src={addedToCart} alt='addedToCart' />
    </button>
  </div>
);

// FIXME: Arreglar la vista de productlist y carditem

export default CardItem;
