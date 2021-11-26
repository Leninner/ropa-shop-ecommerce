import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Checkout.scss';

const Checkout = ({ sumaTotal, cart }) => {
  let encodeText = 'Hola mi pedido es: \n';

  cart.map((value) => (encodeText += ` - ${value.name} ${value.price}\n`));

  const link = `https://wa.me/593987223910?text=${encodeURIComponent(encodeText)}`;

  return (
    <div className='checkout'>
      <div className='checkout-total'>
        <h4>Total</h4>
        <p className='checkout__price'>${sumaTotal}</p>
      </div>
      <button className='checkout__button'>
        <a href={link} target='_blank' rel='noreferrer'>
          Iniciar proceso de Pago
        </a>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Checkout);
