import './form.scss';

const inputs = document.querySelectorAll('.form__input');

function onFocus(evt) {
  const label = evt.target.labels[0];
  label.classList.add('form__label--active');
}

const onBlur = (evt) => {
  const label = evt.target.labels[0];
  const value = evt.target.value;
  if (value === '') {
    label.classList.remove('form__label--active');
  }
};

inputs.forEach((element) => {
  element.addEventListener('focus', onFocus);
  element.addEventListener('blur', onBlur);
});

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // let email = getInputVal('email-input-id');
  // let phone = getInputVal('tel-input-id');

  document.querySelector('.alert').style.display = 'block';

  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('contactForm').reset();
}

// function getInputVal(id) {
//   return document.getElementById(id).value;
// }
