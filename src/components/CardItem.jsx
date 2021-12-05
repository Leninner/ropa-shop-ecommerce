import React from 'react';
import '../assets/styles/components/CardItem.scss';
import { connect } from 'react-redux';
import { addItemToCart, deleteItemsFromCart, aumentarCantidad } from '../actions';
import classNames from 'classnames';

const CardItem = (props) => {
  const { product, cart, bestSellers } = props;

  const cardItem = classNames('card-item', {
    bestSellers,
  });

  const handleCantidad = (product, e) => {
    props.aumentarCantidad(product);
  };

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

      {!cart.includes(product) && (
        <div className='options'>
          <select name='tallas' id='tallas'>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
          </select>

          <div className='contenedor__cantidad'>
            <input
              type='number'
              min='1'
              max='100'
              placeholder={product.cantidad}
              onChange={(e) => handleCantidad({ ...product, cantidad: e.target.value })}
            />
          </div>
        </div>
      )}

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
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
  deleteItemsFromCart,
  aumentarCantidad,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

// FIXME: Pasar el estado de added para la vista de todos los productos
