import '../styles/components/OrderItem.scss'
import { deleteItemsFromCart } from '../actions'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const OrderItem = ({ images, name, price, selectedTalla, id, tallas }) => {
  const dispatch = useDispatch()

  const item = {
    id,
    images,
    name,
    price
  }

  const handleDelete = () => dispatch(deleteItemsFromCart({ item, currentTalla: selectedTalla }))

  return (
    <div className='OrderItem'>
      <figure>
        <img src={images[0]} alt={name} />
      </figure>

      <div className='resumen'>
        <p>{name}</p>

        <div>
          <p>${price}</p>
          <p>{tallas[selectedTalla].cantidad}</p>
          <p>{selectedTalla}</p>
        </div>
      </div>

      <MdOutlineRemoveShoppingCart className='delete' size={25} onClick={handleDelete} />
    </div>
  )
}

export default OrderItem
