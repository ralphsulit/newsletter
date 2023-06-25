const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
const userEmail = document.querySelector('.user-email');

// Inster email in user-email span from homepage
userEmail.innerText = email;

const form = document.querySelector('.form');

// when clicked the user will go back to homepage
form.addEventListener('submit', (e) => {
  e.preventDefault();

  window.location.href = '../index.html';
})


