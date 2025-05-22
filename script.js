const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  
  if (navLinks.classList.contains("show")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

const navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
});