const navLinkItems = document.querySelectorAll(".nav-links a");
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

$(".owl-carousel").ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
});
