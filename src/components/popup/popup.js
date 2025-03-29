import './popup.scss';

const body = document.body;
const controlFirs = document.querySelectorAll('.popup-control-1');
const controlSecond = document.querySelectorAll('.popup-control-2');
const controlThird = document.querySelectorAll('.popup-control-3');
const controlFourth = document.querySelectorAll('.popup-control-4');

const createButton = (caption) => {
  const btn = document.createElement('button');
  btn.classList.add('popup__btn');
  btn.textContent = caption;

  return btn;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'popup-overlay');
  return overlay;
};

const createContent = (template) => {
  const content = document.createElement('div');
  content.setAttribute('class', 'popup__content');
  content.append(template);

  return content;
};

const createPopupHeader = (title, btn) => {
  const header = document.createElement('div');
  header.setAttribute('class', 'popup__header');
  header.textContent = title;
  header.append(btn);

  return header;
};

// const createPopupFooter = () => {
//   const footer = document.createElement('div');
//   footer.setAttribute('class', 'popup__footer');

//   return footer;
// };

const createPopupBlock = () => {
  const popupBlock = document.createElement('div');
  popupBlock.setAttribute('class', 'popup');

  const setContent = (title, templateID) => {
    const btn = createButton('Go Back');
    const template = document.getElementById(templateID).content.cloneNode(true);
    // const popupFooter = createPopupFooter();
    const popupHeader = createPopupHeader(title, btn);
    const popupContent = createContent(template);
    popupBlock.append(popupHeader, popupContent);
  };

  return {
    popupBlock,
    setContent,
  };
};

const overlayBlock = createOverlay();
const { popupBlock, setContent } = createPopupBlock();

const open = (evt) => {
  const title = evt.target.dataset.popupTitle;
  const templateId = evt.target.dataset.templateId;

  setContent(title, templateId);
  body.append(overlayBlock);
  body.append(popupBlock);
};

const close = () => {
  popupBlock.innerHTML = '';
  overlayBlock.remove();
  popupBlock.remove();
};

const onEscape = (evt) => {
  if (evt.code == 'Escape') {
    close();
  }
};

controlFirs.forEach((el) => {
  el.addEventListener('click', open);
});
controlSecond.forEach((el) => {
  el.addEventListener('click', open);
});
controlThird.forEach((el) => {
  el.addEventListener('click', open);
});
controlFourth.forEach((el) => {
  el.addEventListener('click', open);
});

overlayBlock.addEventListener('click', close);
popupBlock.addEventListener('click', (evt) => {
  if (evt.target.closest('.popup__btn')) {
    close();
  }
});
document.addEventListener('keydown', onEscape);
