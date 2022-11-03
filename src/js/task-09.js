const changeColorBtn = document.querySelector('button.change-color');

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const changeColorValue = newColor => {
  const textEl = document.querySelector('span.color');
  textEl.innerHTML = newColor;
};

const changeBgColor = () => {
  const bodyEl = document.querySelector('body');
  let newColor = getRandomHexColor();
  console.log(newColor);
  bodyEl.style.backgroundColor = newColor;
  changeColorValue(newColor);
};

changeColorBtn.addEventListener('click', changeBgColor);
