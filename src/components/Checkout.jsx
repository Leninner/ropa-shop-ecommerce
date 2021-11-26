import React from 'react';

const Checkout = ({ sumaTotal }) => {
  return (
    <div className='checkout'>
      <div className='checkout-total'>
        <h4>Total</h4>
        <p className='checkout__price'>${sumaTotal}</p>
      </div>
      <button className='checkout__button'>Iniciar proceso de Pago</button>
    </div>
  );
};

export default Checkout;
