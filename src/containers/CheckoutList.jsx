import React from 'react';
import CardCheckout from '../components/CardCheckout';
import { connect } from 'react-redux';

const CheckoutList = ({ cart }) => {
  return (
    <div>
      <h1>CheckoutList</h1>
      {cart.map((value) => (
        <CardCheckout key={value} {...value} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CheckoutList);
