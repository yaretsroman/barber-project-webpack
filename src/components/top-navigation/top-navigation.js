import './top-navigation.scss';

const btn = document.querySelector('.btn__mobile-btn');
const drawer = document.querySelector('.drawer');

const toggleDrawer = () => {
  drawer.classList.toggle('drawer--active');
};

btn.addEventListener('click', toggleDrawer);
