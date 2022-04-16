import React from 'react';
import '../assets/styles/components/CardCheckout.scss';
import { MdRemoveShoppingCart } from 'react-icons/md';
import * as CardCheckoutActions from '../actions';
import { useDispatch } from 'react-redux';

export const CardCheckout = ({ name, description, price, cantidad, talla, images, id, tallas }) => {
  const dispatch = useDispatch();
  const { deleteItemsFromCart } = CardCheckoutActions;
  const handleDelete = (id) => dispatch(deleteItemsFromCart(id));

  return (
    <div className='card-checkout'>
      <div className='card-checkout-img'>
        <img src={images[0]} alt='img' />
      </div>

      <div className='card-checkout-info'>
        <h3>{name}</h3>
        <p>{description}</p>

        <div className='prices'>
          <p>
            <span>Talla: </span>
            {talla}
          </p>

          <p>
            <span>Cantidad: </span>
            {tallas[talla].cantidad}
          </p>

          <p>
            <span>Precio Unitario: </span>${price}
          </p>
        </div>
      </div>

      <div className='resume'>
        <p>${price * cantidad}</p>
        <p>|</p>
        <MdRemoveShoppingCart size='30' onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};
