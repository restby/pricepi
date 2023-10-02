import Swiper from '../vendor/swiper';
const initUniaxialSlider = () => {
  if (!document.querySelector('[data-uniaxial__slider]')) {
    return null;
  }

  const uniaxialSliderElement = document.querySelector('[data-uniaxial__slider]');
  const uniaxialSlider = new Swiper(uniaxialSliderElement, {
    simulateTouch: false,
    speed: 500,
    navigation: {
      nextEl: '.slider-btns__arrow--next',
      prevEl: '.slider-btns__arrow--prev',
    },
    initialSlide: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767.5: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1199.5: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  return uniaxialSlider;
};
export {initUniaxialSlider};
