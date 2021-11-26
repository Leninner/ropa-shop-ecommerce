import React, { useState } from 'react';
import logo from '../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import MenuOptions from '../components/MenuOptions';
import MyOrders from '../containers/MyOrders';
import modal from '../assets/images/icons/icon_menu.svg';
import carrito from '../assets/images/icons/icon_shopping_cart.svg';
import { connect } from 'react-redux';

const Header = ({ cart }) => {
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
        <img src={carrito} alt='shopping cart' onClick={handleClickMenu} />
        {cart.length > 0 ? <div>{cart.length}</div> : null}
      </nav>
      {menu && <MyOrders />}
      {menuOptions && <MenuOptions handleClick={handleClickMenuOptions} />}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
