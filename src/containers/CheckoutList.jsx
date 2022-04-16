import React from 'react';
import { CardCheckout } from '../components/CardCheckout';
import { connect } from 'react-redux';
import '../assets/styles/containers/CheckoutList.scss';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { Layout } from './Layout';

const CheckoutList = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <Layout title='Carrito | Ropa Shop 😉' subtitle='Paga seguro en Whatsapp'>
      <div className='checkout-container'>
        <h1>Este es tu Carrito de Compras</h1>
        <div className='mm'>
          <Form />
          <div className='overflow--checkout'>
            {cart.map((value) => (
              <CardCheckout key={value.id} {...value} />
            ))}
            {!cart.length && navigate('/')}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CheckoutList);
