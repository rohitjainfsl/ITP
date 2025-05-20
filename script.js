const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > window.innerHeight) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
