import React from 'react';
import '../assets/styles/components/MenuOptions.scss';
import close from '../assets/images/icons/icon_close.png';
import { connect } from 'react-redux';
import { getCategory } from '../actions';

const MenuOptions = (props) => {
  const { handleClick } = props;

  const handleCategorie = (e) => {
    const categories = e.target.outerText.toLowerCase();
    console.log(categories);
    props.getCategory(categories);
  };

  return (
    <section className='menu-options'>
      <div className='menu-options__container'>
        <img src={close} alt='imagen' onClick={handleClick} />
        <nav>
          <div className='menu-options__container--item main' onClick={handleClick}>
            <a href='https://www.facebook.com/Ropa-Shop-105112035254774' target='_blank' rel='noreferrer'>
              <span>Facebook</span>
            </a>
          </div>
          <div
            className='menu-options__container--item'
            onClick={(e) => {
              handleCategorie(e);
              handleClick();
            }}>
            <span>Sudaderas</span>
          </div>
          <div
            className='menu-options__container--item'
            onClick={(e) => {
              handleCategorie(e);
              handleClick();
            }}>
            <span>Camisetas</span>
          </div>
          <div
            className='menu-options__container--item'
            onClick={(e) => {
              handleCategorie(e);
              handleClick();
            }}>
            <span>Pantalones</span>
          </div>
          <div
            className='menu-options__container--item'
            onClick={(e) => {
              handleCategorie(e);
              handleClick();
            }}>
            <span>Gorras</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  getCategory,
};

export default connect(null, mapDispatchToProps)(MenuOptions);
