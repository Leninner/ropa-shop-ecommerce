import React from 'react';
import { aumentarCantidad, añadirTalla } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const Options = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const { product } = props;

  const handleCantidad = (product) => dispatch(aumentarCantidad(product));
  const handleAddTalla = (product) => dispatch(añadirTalla(product));

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

export default Options;
