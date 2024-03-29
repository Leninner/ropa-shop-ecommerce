import { Fragment, useRef, memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/components/Options.scss'

const Options = memo(({ product, currentTalla, setCurrentTalla }) => {
  const selectRef = useRef(currentTalla)
  const dispatch = useDispatch()
  const handleSelect = () => setCurrentTalla(selectRef.current.value)
  const [currentCantidad, setCurrentCantidad] = useState(1)
  const handleChange = (e) => setCurrentCantidad(e.target.value)

  const toggleCart = (item) => {
    item.tallas[currentTalla].stock > 0
      ? dispatch({
        type: 'TOGGLE_CART',
        payload: {
          item,
          currentCantidad,
          currentTalla
        }
      })
      : dispatch({
        type: 'DELETE_ITEMS_FROM_CART',
        payload: {
          item,
          currentTalla
        }
      })

    setCurrentCantidad(1)
  }

  return (
    <form
      className='options'
      onSubmit={(e) => {
        e.preventDefault()
        toggleCart(product)
      }}
    >
      <div className='tallas-container'>
        <select name='tallas' id='tallas' onChange={handleSelect} ref={selectRef}>
          {Object.entries(product.tallas).map(([talla, { stock }], index) => {
            return (
              <Fragment key={index}>
                {stock > 0
                  ? (
                  <option value={talla}>
                    {talla} ({stock} disponibles)
                  </option>
                    )
                  : (
                  <option value={talla} disabled>
                    {talla} (Agotado)
                  </option>
                    )}
              </Fragment>
            )
          })}
        </select>
        <div className='contenedor__cantidad'>
          <input type='number' placeholder='1' onChange={handleChange} value={currentCantidad} />
        </div>
      </div>

      <div className='contenedor'>
        <div className='contenedor__price'>
          <span>Precio</span>
          <p>$ {product.price}</p>
        </div>

        <button type='submit' disabled={product.tallas[currentTalla]?.stock === 0}>
          Comprar
        </button>
      </div>
    </form>
  )
})

export default Options
