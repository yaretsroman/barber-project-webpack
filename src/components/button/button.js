import './button.scss';

const topBtn = document.querySelector('.to-top-btn');

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 250) {
    topBtn.style.display = 'flex';
  } else {
    topBtn.style.display = 'none';
  }
}

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
