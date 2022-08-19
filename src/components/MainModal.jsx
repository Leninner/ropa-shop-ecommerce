import Slider from 'react-slick';
import portada2 from '../assets/images/mainView/portada2.png';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/components/MainModal.scss';

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
    <section className='main_Modal'>
      <Slider {...settings} className='main_Modal__slider'>
        <div>
          <img className='main_Modal__img' src={portada2} alt='img' />
        </div>




        
      </Slider>
    </section>
  );
};
