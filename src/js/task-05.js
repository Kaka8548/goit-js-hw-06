const inputEl = document.querySelector('#name-input');

const showCurrentName = event => {
  const currentName = document.querySelector('#name-output');
  if (event.target.value) {
    currentName.innerHTML = `${event.target.value}`;
  } else {
    currentName.innerHTML = 'Anonymus';
  }
};

inputEl.addEventListener('input', showCurrentName);
