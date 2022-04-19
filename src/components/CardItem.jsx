import Options from './Options';
import ToggleCart from './ToggleCart';
import { useNearScreen } from '../hooks/useNearScreen';
import { useState } from 'react';
import Slider from 'react-slick';
import '../assets/styles/components/CardItem.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardItem = ({ product }) => {
  const [show, ref] = useNearScreen();
  const [currentTalla, setCurrentTalla] = useState(Object.keys(product.tallas)[0]);
  const [currentCantidad, setCurrentCantidad] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section className='card-item' ref={ref}>
      {show && (
        <>
          <Slider {...settings} className='slider-container'>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt='product' />
              </div>
            ))}
          </Slider>

          <div className='settings'>
            <h2>{product.name}</h2>

            <Options
              product={product}
              currentTalla={currentTalla}
              setCurrentTalla={setCurrentTalla}
              currentCantidad={currentCantidad}
              setCurrentCantidad={setCurrentCantidad}
            />

            <ToggleCart product={product} currentTalla={currentTalla} currentCantidad={currentCantidad} />
          </div>
        </>
      )}
    </section>
  );
};
