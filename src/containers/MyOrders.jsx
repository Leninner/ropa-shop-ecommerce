import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/containers/MyOrders.scss';
import { connect } from 'react-redux';

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
      <div className='checkout'>
        <div className='checkout-total'>
          <h4>Total</h4>
          <p className='checkout__price'>${sumaTotal}</p>
        </div>
        <button className='checkout__button'>Iniciar proceso de Pago</button>
      </div>
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(MyOrders);
