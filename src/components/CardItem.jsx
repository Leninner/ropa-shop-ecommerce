import React from 'react';
import '../assets/styles/components/CardItem.scss';
import classNames from 'classnames';
import Options from './Options';
import ToggleCart from './ToggleCart';
import { useNearScreen } from '../hooks/useNearScreen';
import { useState } from 'react';

export const CardItem = ({ product, bestSellers }) => {
  const { stock } = product;
  const [show, ref] = useNearScreen();
  const [slideRun, setSlide] = useState(false);
  const [currentTalla, setCurrentTalla] = useState(Object.keys(product.tallas)[0]);
  const [currentCantidad, setCurrentCantidad] = useState(1);

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
                    <img src={image} alt='product' />
                  </li>
                );
              })}
            </ul>
          </div>

          <h2>{product.name}</h2>

          <Options
            product={product}
            currentTalla={currentTalla}
            setCurrentTalla={setCurrentTalla}
            currentCantidad={currentCantidad}
            setCurrentCantidad={setCurrentCantidad}
          />
          <ToggleCart product={product} currentTalla={currentTalla} currentCantidad={currentCantidad} />
        </>
      )}
    </div>
  );
};
