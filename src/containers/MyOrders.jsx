import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/containers/MyOrders.scss';

const MyOrders = () => {
  return (
    <aside className='MyOrder'>
      <h3 className='MyOrder__title'>Mi Carrito</h3>
      <div className='orders-container'>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className='checkout'>
        <div className='checkout-total'>
          <h4>Total</h4>
          <p className='checkout__price'>$0.00</p>
        </div>
        <button className='checkout__button'>Iniciar proceso de Pago</button>
      </div>
    </aside>
  );
};

export default MyOrders;
