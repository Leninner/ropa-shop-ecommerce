import Slider from 'react-slick';
import portada from '../assets/images/mainView/portadar1.png';
import portada2 from '../assets/images/mainView/portada2.png';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/styles/components/MainModal.scss';

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
          <img
            className='main_Modal__img'
            src='https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9wYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='img'
          />
        </div>

        <div>
          <img className='main_Modal__img' src={portada} alt='img' />
        </div>

        <div>
          <img className='main_Modal__img' src={portada2} alt='img' />
        </div>
      </Slider>
    </section>
  );
};
