// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("header__list");
const navLinksItems = document.querySelectorAll(".header__link"); // Get all menu links

// Toggle menu open/close
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change hamburger icon when menu is open
  if (navLinks.classList.contains("active")) {
    hamburger.textContent = "✖"; // Change to "X"
  } else {
    hamburger.textContent = "☰"; // Back to hamburger icon
  }
});

// Close menu when clicking outside of it
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.textContent = "☰"; // Reset icon
  }
});

// Close menu when clicking a menu item
navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.textContent = "☰"; // Reset icon
  });
});
