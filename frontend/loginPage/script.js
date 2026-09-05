// const form = document.getElementById('loginForm');
// const errorMsg = document.getElementById('errorMsg');
// const forgotPassword = document.getElementById('forgotPassword');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const username = document.getElementById('username').value.trim();
//   const password = document.getElementById('password').value.trim();
//   const remember = document.getElementById('remember').checked;

//   if (!username || !password) {
//     errorMsg.textContent = 'Please fill in both fields.';
//     errorMsg.style.display = 'block';
//     return;
//   }

//   errorMsg.style.display = 'none';

//   // Replace this with your actual login logic (fetch call to backend, etc.)
//   console.log('Login attempt:', { username, password, remember });

//   // Example: redirect after successful login
//   // window.location.href = 'dashboard.html';
// });

// forgotPassword.addEventListener('click', function (e) {
//   e.preventDefault();
//   alert('Forgot password flow goes here.');
// });
const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const forgotPassword = document.getElementById('forgotPassword');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const remember = document.getElementById('remember') ? document.getElementById('remember').checked : false;

  // 1. Check if both fields are filled out
  if (!username || !password) {
    errorMsg.textContent = 'Please fill in both fields.';
    errorMsg.style.display = 'block';
    return;
  }

  // 2. Validate credentials (replace 'admin' and '1234' with your required login details)
  if (username === 'admin' && password === '1234') {
    errorMsg.style.display = 'none';
    
    // Store 'remember me' status if needed
    if (remember) {
      localStorage.setItem('rememberUser', username);
    }

    // Redirect to your dashboard page (dash.html)
    window.location.href = 'dash.html';
  } else {
    // Show error on invalid credentials
    errorMsg.textContent = 'Invalid username or password.';
    errorMsg.style.display = 'block';
  }
});

// Forgot password event listener
forgotPassword.addEventListener('click', function (e) {
  e.preventDefault();
  alert('Forgot password flow goes here.');
});