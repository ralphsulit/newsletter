const email = document.querySelector('.email');
const form = document.querySelector('.form');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  let messages = [];

  if (email.value === '' || email.value === null) {
    messages.push('Email is required');
    email.style.borderColor = 'hsl(4, 100%, 67%)';
  } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    messages.push('Valid email required');
    email.style.color = 'hsl(4, 100%, 67%)';
    email.style.borderColor = 'hsl(4, 100%, 67%)';
    email.style.backgroundColor = 'hsl(4.8,100%,95.1%)';
  }
  
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});