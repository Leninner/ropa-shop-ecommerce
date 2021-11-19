import React from 'react';
import '../assets/styles/components/CardItem.scss';

const CardItem = () => {
  return (
    <div className='card-item'>
      <img
        src='https://images.unsplash.com/photo-1637253161360-8eacf6fb6437?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80'
        alt='imagenes'
      />
      <h2>Ropa 1</h2>
      <p>descripción</p>
    </div>
  );
};

//FIXME: Arreglar la vista de productlist y carditem

export { CardItem };
