import React from 'react';
import '../assets/styles/components/MenuOptions.scss';
import close from '../assets/images/icons/icon_close.png';

const MenuOptions = ({ handleClick }) => {
  return (
    <section className='menu-options'>
      <div className='menu-options__container'>
        <img src={close} alt='imagen' onClick={handleClick} />
        <nav>
          <div className='menu-options__container--item main'>
            <a href='https://www.facebook.com/Ropa-Shop-105112035254774' target='_blank' rel='noreferrer'>
              <span>Facebook</span>
            </a>
          </div>
          <div className='menu-options__container--item'>
            <a href='/' target='_blank' rel='noreferrer'>
              <span>Sudaderas</span>
            </a>
          </div>
          <div className='menu-options__container--item'>
            <a href='/' target='_blank' rel='noreferrer'>
              <span>Camisetas</span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MenuOptions;
