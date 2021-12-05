import React from 'react';
import '../assets/styles/components/CardItem.scss';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart } from '../actions';
import classNames from 'classnames';

const CardItem = (props) => {
  const { product, cart, bestSellers } = props;

  const cardItem = classNames('card-item', {
    bestSellers,
  });

  const toggleCart = (item) => {
    if (!cart.includes(item)) {
      props.addItemToCart(item);
    } else {
      props.deleteItemsFromCart(item.id);
    }
  };

  return (
    <div className={cardItem}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
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
        <select name='' id=''>
          <option value=''>Talla</option>
          <option value=''>S</option>
          <option value=''>M</option>
          <option value=''>L</option>
        </select>
        <div className='contenedor__cantidad'>
          <h5>Cantidad</h5>
          <input type='number' />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
  deleteItemsFromCart,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

// FIXME: Pasar el estado de added para la vista de todos los productos
