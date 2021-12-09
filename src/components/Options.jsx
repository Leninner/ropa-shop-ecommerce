import React from 'react';
import { connect } from 'react-redux';
import { aumentarCantidad, añadirTalla } from '../actions';

const Options = (props) => {
  const { cart, product } = props;

  const handleCantidad = (product, e) => {
    props.aumentarCantidad(product);
  };

  const handleAddTalla = (product, e) => {
    props.añadirTalla(product);
  };

  return (
    <>
      {!cart.includes(product) && (
        <div className='options'>
          <select name='tallas' id='tallas' onChange={(e) => handleAddTalla({ ...product, talla: e.target.value })}>
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
              onChange={(e) => handleCantidad({ ...product, cantidad: parseInt(e.target.value) })}
            />
          </div>
        </div>
      )}
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  aumentarCantidad,
  añadirTalla,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Options);
