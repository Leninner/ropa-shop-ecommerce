import { addItemToCart, deleteItemsFromCart } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const ToggleCart = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const toggleCart = (item) => {
    if (product.cantidad > 0) {
      if (!cart.includes(item)) {
        dispatch(addItemToCart(item));
      } else {
        dispatch(deleteItemsFromCart(item.id));
      }
    } else {
      alert('Elije una cantidad de productos mayor a 0 antes de continuar');
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

export default ToggleCart;
