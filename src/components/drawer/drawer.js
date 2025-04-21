import './drawer.scss';

const closeBtn = document.querySelector('.drawer__close');
const drawer = document.getElementById('drawer');

closeBtn.addEventListener('click', () => {
  drawer.classList.remove('drawer--active');
});

let touchStart, touchEnd;

drawer.addEventListener('touchstart', (e) => (touchStart = e.targetTouches[0].clientX));

drawer.addEventListener('touchmove', (e) => (touchEnd = e.targetTouches[0].clientX));

drawer.addEventListener('touchend', () => {
  if (touchStart - touchEnd > 45) {
    drawer.classList.remove('drawer--active');
  }
});
