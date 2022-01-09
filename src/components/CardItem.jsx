import React from 'react';
import '../assets/styles/components/CardItem.scss';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Options from './Options';
import ToggleCart from './ToggleCart';
import { useNearScreen } from '../hooks/useNearScreen';

const CardItem = (props) => {
  const [show, element] = useNearScreen();

  const { product, bestSellers } = props;
  const { stock } = product;

  const cardItem = classNames('card-item', {
    bestSellers,
    stock: !stock,
  });

  return (
    <>
      <div className={cardItem} ref={element}>
        {show && (
          <>
            <div className='slider'>
              <ul>
                {product.images.map((image, index) => {
                  return (
                    <li key={index}>
                      <img src={image} alt='product' />
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
              <span className='isStock'>No disponible</span>
            )}
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CardItem);
