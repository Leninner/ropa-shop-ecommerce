import Slider from 'react-slick';
import '../assets/styles/components/MainModal.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg'
            alt='img'
          />
        </div>
        <div>
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg'
            alt='img'
          />
        </div>
        <div>
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2014/03/12/01/36/eyes-285825__340.png'
            alt='img'
          />
        </div>
        <div>
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2020/06/20/11/08/siamese-cat-5320568__340.jpg'
            alt='img'
          />
        </div>
        <div>
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__340.jpg'
            alt='img'
          />
        </div>
        <div>
          <img
            className='mainModal__img'
            src='https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007__340.jpg'
            alt='img'
          />
        </div>
      </Slider>
    </section>
  );
};
