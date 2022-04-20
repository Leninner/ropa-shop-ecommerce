import React from 'react';
import '../assets/styles/components/CardCheckout.scss';
import { MdRemoveShoppingCart } from 'react-icons/md';
import * as CardCheckoutActions from '../actions';
import { useDispatch } from 'react-redux';

export const CardCheckout = ({ name, description, price, cantidad, talla, images, id }) => {
  const dispatch = useDispatch();
  const { deleteItemsFromCart } = CardCheckoutActions;
  const handleDelete = (id) => dispatch(deleteItemsFromCart({ id, currentTalla: talla }));

  return (
    <div className='card-checkout'>
      <img src={images[0]} alt='img' />

      <div className='card-checkout-info'>
        <div className='prices'>
          <h3>{name}</h3>
          <p className='description'>{description}</p>

          <p>
            <span>Talla:</span> {talla}
          </p>
          <p>
            <span>Cantidad:</span> {cantidad}
          </p>
          <p>
            <span>Precio Unitario:</span> ${price}
          </p>
        </div>

        <div className='resume'>
          <p>${price * cantidad}</p>
          <span>|</span>
          <MdRemoveShoppingCart size='30' onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};
