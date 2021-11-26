import React from 'react';
import '../assets/styles/components/OrderItem.scss';
import close from '../assets/images/icons/icon_close.png';
import { deleteItemsFromCart } from '../actions';
import { connect } from 'react-redux';

const OrderItem = (props) => {
  const { image, title, price } = props;

  const handleDelete = () => {
    props.deleteItemsFromCart(props.id);
  };

  return (
    <div className='OrderItem'>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={close} alt='X' className='close' onClick={handleDelete} />
    </div>
  );
};

const mapDispatchToProps = {
  deleteItemsFromCart,
};

export default connect(null, mapDispatchToProps)(OrderItem);
