import React, { useState } from 'react';
import logo from '../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import MenuOptions from '../components/MenuOptions';
import MyOrders from '../containers/MyOrders';
import modal from '../assets/images/icons/icon_menu.svg';
import cart from '../assets/images/icons/icon_shopping_cart.svg';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState(false);

  const handleClickMenuOptions = () => {
    setMenuOptions(!menuOptions);
  };

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='header'>
      <nav className='nav-categories' onClick={handleClickMenuOptions}>
        <img src={modal} alt='modal' />
      </nav>
      <section>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </section>
      <nav className='nav-main'>
        <img src='https://img.icons8.com/material/24/000000/search-for-love.png' alt='search' />
        <img src={cart} alt='cart' onClick={handleClickMenu} />
      </nav>
      {menu && <MyOrders />}
      {menuOptions && <MenuOptions handleClick={handleClickMenuOptions} />}
    </header>
  );
};

export { Header };
