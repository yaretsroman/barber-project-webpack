import './barbers-banner.scss';
import 'swiper/css/navigation';

import Swiper, { Navigation } from 'swiper';

new Swiper('.barbers-banner', {
  modules: [Navigation],
  navigation: {
    nextEl: '.barbers-banner__next-btn',
    prevEl: '.barbers-banner__prev-btn',
  },
});
