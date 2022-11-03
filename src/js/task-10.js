const boxesEl = document.querySelector('#boxes');
const buttonsEl = document.querySelector('#controls');
const inputEl = buttonsEl.firstElementChild;
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = amount => {
  const boxArr = [];
  let size = 30;
  for (let i = 1; i <= Number(amount); i += 1) {
    let randomColor = getRandomHexColor();
    const box = `<div style='background-color:${randomColor}; width:${size}px; height:${size}px'></div>`;
    boxArr.push(box);
    size += 10;
  }
  addBoxes(boxArr);
};

const addBoxes = arr => {
  boxesEl.insertAdjacentHTML('afterbegin', arr.join(''));
};

const onCreateClick = event => {
  event.preventDefault();
  boxesEl.innerHTML = '';
  createBoxes(inputEl.value);
};

const onDestroyClick = event => {
  event.preventDefault();
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

createBtnEl.addEventListener('click', onCreateClick);
destroyBtnEl.addEventListener('click', onDestroyClick);
