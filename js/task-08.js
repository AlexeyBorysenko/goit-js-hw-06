

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitedd);


function submitedd(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('Все поля должны быть заполнены!');
  } else {
    const userInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
}


