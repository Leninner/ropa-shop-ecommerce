import React from 'react';
import '../assets/styles/components/CardItem.scss';

const CardItem = ({ image, name, description }) => (
  <div className='card-item'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

// FIXME: Arreglar la vista de productlist y carditem

export { CardItem };
