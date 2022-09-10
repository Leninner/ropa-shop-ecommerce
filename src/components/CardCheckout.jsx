import '../styles/components/CardCheckout.scss'
import { MdRemoveShoppingCart } from 'react-icons/md'
import * as CardCheckoutActions from '../actions'
import { useDispatch } from 'react-redux'

export const CardCheckout = ({ name, description, price, tallas, images, id, selectedTalla }) => {
  const dispatch = useDispatch()
  const { deleteItemsFromCart } = CardCheckoutActions

  const item = {
    name,
    description,
    id
  }

  const handleDelete = () => dispatch(deleteItemsFromCart({ item, currentTalla: selectedTalla }))

  return (
    <div className='card-checkout'>
      <img src={images[0]} alt='img' />

      <div className='card-checkout-info'>
        <div className='prices'>
          <h3>{name}</h3>
          <p className='description'>{description}</p>

          <p>
            <span>Talla:</span> {selectedTalla}
          </p>
          <p>
            <span>Cantidad:</span> {tallas[selectedTalla].cantidad}
          </p>
          <p>
            <span>Precio Unitario:</span> ${price}
          </p>
        </div>

        <div className='resume'>
          <p>${price * tallas[selectedTalla].cantidad}</p>
          <span>|</span>
          <MdRemoveShoppingCart size='30' onClick={handleDelete} />
        </div>
      </div>
    </div>
  )
}
