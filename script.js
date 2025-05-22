const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  
  // Toggle icons - ensure only one is visible at a time
  if (navLinks.classList.contains("show")) {
    // Menu is open - show close icon, hide hamburger
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    // Menu is closed - show hamburger icon, hide close
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

// Optional: Close menu when clicking on a nav link (for better UX)
const navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    // Always show hamburger and hide close when menu closes
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

// Optional: Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
    // Always show hamburger and hide close when menu closes
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

// Initialize: Make sure hamburger is visible and close is hidden on page load
document.addEventListener("DOMContentLoaded", () => {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
});