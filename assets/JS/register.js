const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Save user data to local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Redirect to login page
  window.location.href = 'login.html';
});
