import React from 'react';
import '../assets/styles/components/CardItem.scss';

const CardItem = () => {
  return (
    <div className='card-item'>
      <img
        src='https://images.unsplash.com/photo-1637858363834-13d4c29429eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='imagenes'
      />
      <h2>Ropa 1</h2>
      <p>Descripción</p>
    </div>
  );
};

// FIXME: Arreglar la vista de productlist y carditem

export { CardItem };
