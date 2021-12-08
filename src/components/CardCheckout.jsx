import React from 'react';
import '../assets/styles/components/CardCheckout.scss';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { deleteItemsFromCart } from '../actions';

const CardCheckout = (props) => {
  const { name, description, price, cantidad, talla, image, id } = props;

  const handleDelete = (id) => {
    props.deleteItemsFromCart(id);
  };

  return (
    <>
      <div className='card-checkout'>
        <div className='card-checkout-img'>
          <img src={image} alt='img' />
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
              {cantidad}
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
    </>
  );
};

const mapDispatchToProps = {
  deleteItemsFromCart,
};

export default connect(null, mapDispatchToProps)(CardCheckout);
