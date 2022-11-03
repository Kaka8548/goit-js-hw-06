const formEl = document.querySelector('.login-form');
const userData = {};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value && password.value) {
    userData[email.name] = email.value;
    userData[password.name] = password.value;
    console.log(userData);
    event.currentTarget.reset();
  } else {
    alert('Всі поля повинні бути заповнені 🙃');
  }
};

formEl.addEventListener('submit', handleSubmit);
