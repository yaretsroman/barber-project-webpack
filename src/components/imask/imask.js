import IMask from 'imask';

const element = document.getElementById('tel-input-id');

const mask = new IMask(element, {
  mask: '+{375} (00) 000-00-00',
});

mask;
