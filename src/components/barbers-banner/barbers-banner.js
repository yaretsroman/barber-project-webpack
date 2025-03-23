import './barbers-banner.scss';
import 'swiper/css/navigation';

import Swiper, { Navigation } from 'swiper';

new Swiper('.barbers-content', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 28,
  navigation: {
    nextEl: '.barbers-content__next-btn',
    prevEl: '.barbers-content__prev-btn',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1225: {
      slidesPerView: 4,
    },
  },
});
