import React from 'react';
import '../assets/styles/components/CardItem.scss';

const CardItem = ({ image, name }) => (
  <div className='card-item'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <button>
      <img src='https://img.icons8.com/fluency/48/000000/add-basket.png' alt='carrito' />
      {/* <img src='https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v2.png' />  */}
    </button>
  </div>
);

// FIXME: Arreglar la vista de productlist y carditem

export { CardItem };
