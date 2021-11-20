import React from 'react';
import '../assets/styles/components/CardItem.scss';

const CardItem = () => {
  return (
    <div className='card-item'>
      <img
        src='https://images.unsplash.com/photo-1563183222-ff776d1076e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9wYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt='imagenes'
      />
      <h2>Ropa 1</h2>
      <p>Descripción</p>
    </div>
  );
};

// FIXME: Arreglar la vista de productlist y carditem

export { CardItem };
