import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/containers/MyOrders.scss';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const MyOrders = (props) => {
  const { cart } = props;
  let totalPrice = 0;

  return (
    <aside className='MyOrder'>
      <h3 className='MyOrder__title'>Mi Carrito</h3>
      <div className='orders-container'>
        {cart.length > 0
          ? cart.map((item) => {
              totalPrice += item.price * item.cantidad;
              return <OrderItem key={item.id} {...item} />;
            })
          : 'No hay productos en el carrito'}
      </div>
      {cart.length > 0 && <Checkout sumaTotal={totalPrice} />}
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(MyOrders);
