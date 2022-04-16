import React from 'react';
import '../assets/styles/components/OrderItem.scss';
import { deleteItemsFromCart } from '../actions';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const OrderItem = ({ images, name, price, talla, tallas, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteItemsFromCart({ id, currentTalla: talla }));

  return (
    <div className='OrderItem'>
      <figure>
        <img src={images[0]} alt={name} />
      </figure>

      <div className='resumen'>
        <p>{name}</p>

        <div>
          <p>${price}</p>
          <p>{tallas[talla].cantidad}</p>
          <p>{talla}</p>
        </div>
      </div>

      <MdOutlineRemoveShoppingCart className='delete' size={25} onClick={handleDelete} />
    </div>
  );
};

export default OrderItem;
