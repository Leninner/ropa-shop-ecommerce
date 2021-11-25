import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import MenuOptions from '../components/MenuOptions';
import MyOrders from '../containers/MyOrders';

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [menuOptions, setMenuOptions] = React.useState(false);

  const handleClickMenuOptions = () => {
    setMenuOptions(!menuOptions);
  };

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='header'>
      <nav className='nav-categories' onClick={handleClickMenuOptions}>
        <img src='https://img.icons8.com/material/48/000000/menu--v4.png' alt='modal' />
      </nav>
      <section>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </section>
      <nav className='nav-main'>
        <img src='https://img.icons8.com/material/24/000000/search-for-love.png' alt='search' />
        <img
          src='https://img.icons8.com/material/24/000000/shopping-cart--v1.png'
          alt='cart'
          onClick={handleClickMenu}
        />
      </nav>
      {menu && <MyOrders />}
      {menuOptions && <MenuOptions handleClick={handleClickMenuOptions} />}
    </header>
  );
};

export { Header };
