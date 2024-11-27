import './top-navigation.scss';

const btn = document.querySelector('.top-navigation__mobile-btn');
const drawer = document.querySelector('.drawer');

const toggleDrawer = () => {
  drawer.classList.toggle('drawer--active');
};

btn.addEventListener('click', toggleDrawer);
