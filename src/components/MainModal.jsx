import React from 'react';
import '../assets/styles/components/MainModal.scss';

const MainModal = () => (
  <section className='mainModal'>
    <button>
      <a href='#allProducts'>Ver los productos</a>
    </button>

    <div className='mainModal__container'>
      <h2>MUST HAVE BASICS</h2>
      <div className='buttons'>
        <button>Men</button>
        <button>Women</button>
      </div>
    </div>
  </section>
);

export { MainModal };
