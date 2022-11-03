const inputEl = document.querySelector('#font-size-control');
const defaultSize = inputEl.value;

const setFontSize = size => {
  const textEl = document.querySelector('#text');
  textEl.style.fontSize = `${size}px`;
};

const changeFontSize = event => {
  const newSize = event.target.value;
  setFontSize(newSize);
};

inputEl.addEventListener('input', changeFontSize);
setFontSize(defaultSize);
