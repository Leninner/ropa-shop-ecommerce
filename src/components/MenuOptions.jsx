import React from 'react';
import '../assets/styles/components/MenuOptions.scss';

const MenuOptions = ({ handleClick }) => {
  return (
    <section className='menu-options'>
      <div className='menu-options__container'>
        <img src='https://img.icons8.com/ultraviolet/40/000000/delete-sign.png' alt='imagen' onClick={handleClick} />
        <nav>
          <div className='menu-options__container--item main'>
            <a href='https://www.facebook.com/Ropa-Shop-105112035254774' target='_blank' rel='noreferrer'>
              <span>Facebook</span>
            </a>
          </div>
          <div className='menu-options__container--item'>
            <a href='https://wa.link/6fql7w' target='_blank' rel='noreferrer'>
              <span>Programa de Afiliados</span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MenuOptions;
