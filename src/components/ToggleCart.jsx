import { addItemToCart, deleteItemsFromCart } from '../actions';
import { useDispatch } from 'react-redux';
import '../assets/styles/components/ToggleCart.scss';

const ToggleCart = ({ product, currentTalla }) => {
  const dispatch = useDispatch();

  const toggleCart = (item) => {
    if (item.tallas[currentTalla].stock === 0) {
      console.log('Sinfunciona');
      dispatch(deleteItemsFromCart({ id: item.id, currentTalla }));
    }

    console.log(item);
    const { id, images, name, price } = item;

    const itemToAdd = {
      id,
      images,
      name,
      price,
      talla: currentTalla,
    };

    if (
      item.tallas[currentTalla].stock > 0 &&
      item.tallas[currentTalla].cantidad > 0 &&
      item.tallas[currentTalla].cantidad <= item.tallas[currentTalla].stock
    ) {
      dispatch(addItemToCart({ itemToAdd, currentTalla, currentCantidad: item.tallas[currentTalla].cantidad }));
    }
  };

  return (
    <div className='contenedor'>
      <div className='contenedor__price'>
        <span>Precio</span>
        <p>$ {product.price}</p>
      </div>

      <button>
        <figure onClick={() => toggleCart(product)}>
          <img
            src={
              product.tallas[currentTalla].stock === 0
                ? 'https://img.icons8.com/ios-glyphs/50/000000/minus.png'
                : 'https://img.icons8.com/material-rounded/24/000000/plus--v2.png'
            }
            alt='carrito'
          />
        </figure>
      </button>
    </div>
  );
};

export default ToggleCart;
