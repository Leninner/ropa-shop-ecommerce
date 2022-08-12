import '../styles/components/MenuOptions.scss';
import close from '../assets/images/icons/icon_close.png';
import { getCategory } from '../actions';
import { useDispatch } from 'react-redux';

const MenuOptions = ({ handleClick }) => {
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    const categories = e.target.outerText.toLowerCase();
    dispatch(getCategory(categories));
  };

  return (
    <section className='menu-options' onClick={handleClick}>
      <div className='menu-options__container'>
        <img src={close} alt='imagen' />
        <nav>
          <div className='menu-options__container--item main'>
            <a
              href='https://www.facebook.com/Ropa-Shop-105112035254774'
              target='_blank'
              rel='noreferrer'
            >
              <span>Facebook</span>
            </a>
          </div>
          <div className='menu-options__container--item' onClick={handleCategory}>
            <span>Sudaderas</span>
          </div>
          <div className='menu-options__container--item' onClick={handleCategory}>
            <span>Camisetas</span>
          </div>
          <div className='menu-options__container--item' onClick={handleCategory}>
            <span>Pantalones</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MenuOptions;
