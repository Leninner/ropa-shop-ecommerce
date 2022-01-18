import React from 'react';
import '../assets/styles/components/CardItem.scss';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Options from './Options';
import ToggleCart from './ToggleCart';
import { useNearScreen } from '../hooks/useNearScreen';
import { useState } from 'react';

const CardItem = (props) => {
  const { product, bestSellers } = props;
  const { stock } = product;
  const [show, ref] = useNearScreen();
  const [slideRun, setSlide] = useState(false);

  const handleSetSlide = () => {
    setSlide(!slideRun);
  };

  const cardItem = classNames('card-item', {
    bestSellers,
    stock: !stock,
  });

  const cardItemSlide = classNames('slide', {
    slideRun,
  });

  return (
    <div className={cardItem} ref={ref}>
      {show && (
        <>
          <div className={cardItemSlide} onMouseEnter={handleSetSlide} onMouseLeave={handleSetSlide}>
            <ul>
              {product.images.map((image, index) => {
                return (
                  <li key={index}>
                    <img src={`https://9zkbkpvt.tinifycdn.com${image}`} alt='product' />
                  </li>
                );
              })}
            </ul>
          </div>
          <h2>{product.name}</h2>

          {stock ? (
            <>
              <Options product={product} />
              <ToggleCart product={product} />
            </>
          ) : (
            <span className='isStock'>Agotado</span>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CardItem);
