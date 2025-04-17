import './drawer.scss';

const closeBtn = document.querySelector('.drawer__close');
const drawer = document.querySelector('.drawer');

closeBtn.addEventListener('click', () => {
  drawer.classList.remove('drawer--active');
});

const onClickOudside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener('click', (e) => {
    if (!element.contains(e.target)) callback();
  });
};

onClickOudside('drawer-id', () => drawer.classList.remove('drawer--active'));

document.addEventListener('DOMContentLoaded', onClickOudside);
