import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart } from '../actions';

const ToggleCart = (props) => {
  const { product, cart } = props;

  const toggleCart = (item) => {
    if (!cart.includes(item)) {
      props.addItemToCart(item);
    } else {
      props.deleteItemsFromCart(item.id);
    }
  };

  return (
    <>
      <div className='contenedor'>
        <div className='contenedor__price'>
          <h5>Precio</h5>
          <p>$ {product.price}</p>
        </div>

        <button>
          <figure onClick={() => toggleCart(product)}>
            <img
              src={
                cart.includes(product)
                  ? 'https://img.icons8.com/ios-glyphs/50/000000/minus.png'
                  : 'https://img.icons8.com/material-rounded/24/000000/plus--v2.png'
              }
              alt='carrito'
            />
          </figure>
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addItemToCart,
  deleteItemsFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCart);
