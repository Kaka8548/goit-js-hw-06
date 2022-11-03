const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));

const checkInput = event => {
  event.preventDefault();
  if (event.target.value.length === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', checkInput);
