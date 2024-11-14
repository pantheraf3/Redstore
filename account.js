const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const form = document.getElementById('form');
const indicator = document.getElementById('indicator');

 
registerForm.style.position = 'relative';
loginForm.style.left = '-15px';
registerForm.style.left = '350px';  
indicator.style.right = '105px'; 

 
loginBtn.addEventListener('click', () => {
  registerForm.style.left = '350px';
  loginForm.style.left = '-15px';
  indicator.style.right = '105px'; 
});

registerBtn.addEventListener('click', () => {
  registerForm.style.left = '0px';
  loginForm.style.left = '350px';
  indicator.style.right = '10px'
});





