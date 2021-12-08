import React from 'react';
import '../assets/styles/components/CardCheckout.scss';
import { MdRemoveShoppingCart } from 'react-icons/md';

const CardCheckout = (props) => {
  const { name, description, price, cantidad, talla, image } = props;
  return (
    <>
      <section className='checkout-main'>
        <h1>Carrito de Compras</h1>
        <div className='card-checkout'>
          <div className='card-checkout-img'>
            <img src={image} alt='img' />
          </div>
          <div className='card-checkout-info'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              <span>Talla: </span>
              {talla}
            </p>
            <p>
              <span>Cantidad: </span>
              {cantidad}
            </p>
            <p>
              <span>Precio Unitario: </span>
              {price}
            </p>
          </div>
          <div className='resume'>
            <p>{price * cantidad}</p>
            <MdRemoveShoppingCart size='35' />
          </div>
        </div>
        <div className='form-checkout'></div>
      </section>
    </>
  );
};

export default CardCheckout;
