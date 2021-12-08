import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Checkout.scss';
import { AppContext } from '../context';
import { Link } from 'react-router-dom';

const Checkout = ({ sumaTotal, cart }) => {
  const { total, setTotal } = useContext(AppContext);

  useEffect(() => {
    setTotal(sumaTotal);
    // eslint-disable-next-line
  }, [sumaTotal]);

  let encodeText = 'Hola mi pedido es: \n';

  cart.map((value) => (encodeText += ` - ${value.name} ${value.price}\n`));

  return (
    <div className='checkout'>
      <div className='checkout-total'>
        <h4>Total</h4>
        <p className='checkout__price'>${total}</p>
      </div>
      <button className='checkout__button'>
        <Link to='/checkout'>Checkout</Link>
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

// <a href={link} target='_blank' rel='noreferrer'>

//           </a>

// const link = `https://wa.me/593987223910?text=${encodeURIComponent(encodeText)}`;
