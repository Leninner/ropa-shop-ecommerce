import React from 'react';
import '../assets/styles/components/MenuOptions.scss';

const MenuOptions = () => {
  return (
    <section className='menu-options'>
      <div className='menu-options__container'>
        <img src='https://img.icons8.com/ultraviolet/40/000000/delete-sign.png' alt='imagen' />
        <nav>
          <div className='menu-options__container--item main'>
            <a href='/'>
              <span>Inicio</span>
            </a>
          </div>
          <div className='menu-options__container--item'>
            <a href='/'>
              <span>Mi cuenta</span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MenuOptions;
