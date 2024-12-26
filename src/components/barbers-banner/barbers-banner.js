import './barbers-banner.scss';
import 'swiper/css/navigation';

import Swiper, { Navigation } from 'swiper';

new Swiper('.mySwiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 28,
  navigation: {
    nextEl: '.barbers-banner__next-btn',
    prevEl: '.barbers-banner__prev-btn',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
