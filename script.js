let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

let users = [];
let isLoggedIn = false; // Variable to track user login status

document.addEventListener("DOMContentLoaded", function() {
  const loginContainer = document.getElementById("login-container");
  const signupContainer = document.getElementById("signup-container");
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const viewCartButton = document.getElementById("view-cart");

  loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  });

  signupLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  });

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert("Login successful!");
      isLoggedIn = true;
      viewCartButton.disabled = false; // Enable the cart button
    } else {
      alert("Invalid email or password.");
    }
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const phoneNumber = document.getElementById("signup-phone").value;
    // Check if the email already exists
    if (users.some(user => user.email === email)) {
      alert("Email already registered. Please use a different email address.");
    } else {
      // Add the new user to the database
      users.push({ email, password, phoneNumber });
      alert("Registration successful! Please log in to continue.");
      // Clear the signup form
      signupForm.reset();
      // Switch to the login form
      loginContainer.style.display = "block";
      signupContainer.style.display = "none";
    }
  });

  viewCartButton.addEventListener("click", function(event) {
    if (!isLoggedIn) {
      alert("Please log in to view your cart.");
      event.preventDefault(); // Prevent the default action (e.g., redirecting to the cart page)
    }
  });
});


