const email = document.querySelector('.email');
const form = document.querySelector('.form');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let messages = [];
  let emailValue = email.value;

  if (emailValue === '' || emailValue === null) {
    messages.push('Email is required');
    email.style.borderColor = 'hsl(4, 100%, 67%)';
  } else if (!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    messages.push('Valid email required');
    email.style.color = 'hsl(4, 100%, 67%)';
    email.style.borderColor = 'hsl(4, 100%, 67%)';
    email.style.backgroundColor = 'hsl(4.8,100%,95.1%)';
  } else {
    window.location.href = 'success-page.html?email=' + encodeURIComponent(emailValue);
  }
  
  if (messages.length > 0) {
    errorElement.innerText = messages.join(', ');
  }
});



//////////////////////
////Success Page Script
//////////////////////
const urlParams = new URLSearchParams(window.location.search);
const successEmail = urlParams.get("email");
const userEmail = document.querySelector('.user-email');

// Inster email in user-email span from homepage
userEmail.innerText = successEmail;

const successForm = document.querySelector('.form');

// when clicked the user will go back to homepage
form.addEventListener('submit', (e) => {
  e.preventDefault();

  window.location.href = 'index.html';
})


