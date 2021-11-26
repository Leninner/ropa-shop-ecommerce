import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/containers/MyOrders.scss';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const MyOrders = ({ cart }) => {
  let sumaTotal = 0;

  return (
    <aside className='MyOrder'>
      <h3 className='MyOrder__title'>Mi Carrito</h3>
      <div className='orders-container'>
        {cart.length > 0
          ? cart.map((item) => {
              sumaTotal += item.price;
              return <OrderItem key={item.id} {...item} />;
            })
          : 'No hay productos en el carrito'}
      </div>
      <Checkout sumaTotal={sumaTotal} />
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(MyOrders);
