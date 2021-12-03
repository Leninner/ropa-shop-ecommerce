import React from 'react';
import '../assets/styles/components/MainModal.scss';
import { Link } from 'react-router-dom';

const MainModal = () => (
  <section className='mainModal'>
    <button>
      <Link to='#allProducts'>Ver los productos</Link>
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
