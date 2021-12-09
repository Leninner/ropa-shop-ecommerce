import React from 'react';
import '../assets/styles/components/OrderItem.scss';
import { deleteItemsFromCart } from '../actions';
import { connect } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

const OrderItem = (props) => {
  const { images, name, price, cantidad, talla } = props;

  const handleDelete = () => {
    props.deleteItemsFromCart(props.id);
  };

  return (
    <div className='OrderItem'>
      <figure>
        <img src={images[0]} alt={name} />
      </figure>
      <div className='resumen'>
        <p>{name}</p>
        <div>
          <p>${price}</p>
          <p>{cantidad}</p>
          <p>{talla}</p>
        </div>
      </div>
      <MdOutlineRemoveShoppingCart
        className='delete'
        size={25}
        onClick={() => {
          handleDelete();
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  deleteItemsFromCart,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
