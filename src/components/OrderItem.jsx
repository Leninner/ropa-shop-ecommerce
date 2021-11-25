import React from 'react';
import '../assets/styles/components/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className='OrderItem'>
      <figure>
        <img
          src='https://images.unsplash.com/photo-1633861357509-77b7cd2bfe99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt=''
        />
      </figure>
      <p>Producto Muestra</p>
      <p>$,00</p>
      <img src='' alt='X' className='close' />
    </div>
  );
};

export default OrderItem;
