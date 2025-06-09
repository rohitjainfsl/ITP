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

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight * 0.8; 

    if (scrollY > triggerPoint) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    centerslide:true,
    items: 1, 
    responsive: {
      570: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
