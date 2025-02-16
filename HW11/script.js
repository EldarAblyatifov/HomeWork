const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

const correctUsername = 'admin';
const correctPassword = 'password123';

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === correctUsername && password === correctPassword) {
    messageDiv.innerHTML = 'Авторизация успешна!';
  } else {
    messageDiv.innerHTML = 'Неверный логин или пароль.';
  }

  setTimeout(() => {
    messageDiv.innerHTML = '';
  }, 3000);

  loginForm.reset();
});