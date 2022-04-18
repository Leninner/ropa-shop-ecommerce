import { Fragment, useRef } from 'react';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity } from '../actions';
import '../assets/styles/components/Options.scss';

const Options = memo(({ product, currentTalla, setCurrentTalla }) => {
  const selectRef = useRef(currentTalla);
  const dispatch = useDispatch();
  const handleSelect = () => setCurrentTalla(selectRef.current.value);

  const handleCantidad = (e) =>
    dispatch(incrementQuantity({ id: product.id, currentTalla, currentCantidad: e.target.value }));

  console.log(currentTalla);

  return (
    <div className='options'>
      <select name='tallas' id='tallas' onChange={handleSelect} ref={selectRef}>
        {Object.entries(product.tallas).map(([talla, { stock }], index) => {
          return (
            <Fragment key={index}>
              {stock > 0 ? (
                <option value={talla}>{talla}</option>
              ) : (
                <option value={talla} disabled>
                  {talla} (Agotado)
                </option>
              )}
            </Fragment>
          );
        })}
      </select>

      <div className='contenedor__cantidad'>
        <input type='number' placeholder='1' onChange={handleCantidad} />
      </div>
    </div>
  );
});

export default Options;
