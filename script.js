// ----------------------
// Part 1: Event Handling
// ----------------------
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button!";
});

// ----------------------
// Part 2: Interactive Features
// ----------------------

// Light/Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increase").addEventListener("click", function() {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", function() {
  counter--;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Dropdown Menu
document.getElementById("dropBtn").addEventListener("click", function() {
  const dropdown = document.getElementById("dropContent");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropBtn")) {
    const dropdown = document.getElementById("dropContent");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
});

// Tabbed Interface
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    const target = this.dataset.tab;

    // Hide all tabs
    tabContents.forEach(content => content.style.display = "none");

    // Remove active from all buttons
    tabButtons.forEach(b => b.classList.remove("active"));

    // Show selected tab
    document.getElementById(target).style.display = "block";
    this.classList.add("active");
  });
});

// Set default tab
tabButtons[0].click();

// ----------------------
// Part 3: Form Validation
// ----------------------
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  if (!name || !email || !password) {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});
