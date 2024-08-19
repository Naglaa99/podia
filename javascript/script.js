window.onscroll = () => stickyHeader();

function stickyHeader() {
  const header = document.getElementById("header");

  if (window.scrollY > 0) header.classList.add("sticky");
  else header.classList.remove("sticky");
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
closeMenu.addEventListener("click", () => navLinks.classList.remove("active"));
