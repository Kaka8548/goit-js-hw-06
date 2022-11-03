let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementValue = event => {
  event.preventDefault();
  const newValue = document.querySelector('#value');
  counterValue -= 1;
  newValue.innerHTML = `${counterValue}`;
};

const incrementValue = event => {
  event.preventDefault();
  const newValue = document.querySelector('#value');
  counterValue += 1;
  newValue.innerHTML = `${counterValue}`;
};

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);
