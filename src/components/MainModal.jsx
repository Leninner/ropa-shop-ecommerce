import Slider from 'react-slick';
import '../assets/styles/components/MainModal.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portada1 from '../assets/images/mainView/portada-r1.png';

export const MainModal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnSelect: false,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className='mainModal'>
      <Slider {...settings} className='mainModal__slider'>
        <div>
          <img className='mainModal__img' src={portada1} alt='img' />
        </div>
        <div>
          <img className='mainModal__img' src={somePhoto} alt='img' />
        </div>
        <div>
          <img className='mainModal__img' src={somePhoto} alt='img' />
        </div>
        <div>
          <img className='mainModal__img' src={somePhoto} alt='img' />
        </div>
        <div>
          <img className='mainModal__img' src={somePhoto} alt='img' />
        </div>
        <div>
          <img className='mainModal__img' src={somePhoto} alt='img' />
        </div>
      </Slider>
    </section>
  );
};
