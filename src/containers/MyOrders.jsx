import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/containers/MyOrders.scss';
import Checkout from '../components/Checkout';
import { useSelector } from 'react-redux';

const MyOrders = () => {
  let totalPrice = 0;
  const { cart } = useSelector((state) => state);

  return (
    <aside className='MyOrder'>
      <h3 className='MyOrder__title'>Mi Carrito</h3>

      <div className='orders-container'>
        {cart.length > 0
          ? cart.map((item) => {
              totalPrice += item.price * item.cantidad;
              return <OrderItem key={`${item.id}-${item.selectedTalla}`} {...item} />;
            })
          : 'No hay productos en el carrito'}
      </div>

      {cart.length > 0 && <Checkout sumaTotal={totalPrice} />}
    </aside>
  );
};

export default MyOrders;
