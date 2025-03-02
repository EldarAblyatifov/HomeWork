document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  function getUsers() {
    let users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }

  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function showMessage(form, message, isError = true) {
    let messageDiv = form.querySelector(".form-message");
    if (!messageDiv) {
      messageDiv = document.createElement("div");
      messageDiv.classList.add("form-message");
      form.appendChild(messageDiv);
    }
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? "red" : "green";

    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  function isValidName(name) {
    return /^[a-zA-Zа-яА-Я]{2,24}$/.test(name);
  }

  function isValidEmail(email) {
    return /^.{7,}@.+\..+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^\+\d{8,12}$/.test(phone);
  }

  function isValidPassword(password) {
    return /^.{5,26}$/.test(password);
  }




  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let username = document.querySelector("#username").value.trim();
      let phone = document.querySelector("#phone").value.trim();
      let email = document.querySelector("#reg-email").value.trim();
      let password = document.querySelector("#reg-password").value.trim();

      if (!username || !phone || !email || !password) {
        showMessage(registerForm, "Все поля должны быть заполнены!");
        return;
      }

      if (!isValidName(username)) {
        showMessage(registerForm, "Имя должно содержать только буквы (2-24 символа)!");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage(registerForm, "Некорректный email!");
        return;
      }

      if (!isValidPhone(phone)) {
        showMessage(registerForm, "Телефон должен начинаться с + и содержать 8-12 цифр!");
        return;
      }

      if (!isValidPassword(password)) {
        showMessage(registerForm, "Пароль должен содержать от 5 до 26 символов!");
        return;
      }


      let users = getUsers();
      let userExists = users.some(user => user.email === email);

      if (userExists) {
        showMessage(registerForm, "Этот email уже зарегистрирован!");
        return;
      }

      users.push({ username, phone, email, password });
      saveUsers(users);

      showMessage(registerForm, "Регистрация успешна!", false);
      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.setAttribute("novalidate", "true");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let email = document.querySelector("#log-email").value.trim();
      let password = document.querySelector("#log-password").value.trim();

      function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      

      if (!email || !password) {
        showMessage(loginForm, "Введите email и пароль!");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage(loginForm, "Некорректный email!");
        return;
      }

      let users = getUsers();
      let user = users.find(user => user.email === email && user.password === password);

      if (!user) {
        showMessage(loginForm, "Неверный email или пароль!");
        return;
      }

      showMessage(loginForm, `Добро пожаловать, ${user.username}!`, false);
      loginForm.reset();
    });
  }
});