window.onscroll = function () {
  stickyHeader();
};
function stickyHeader() {
  let header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

closeMenu.addEventListener("click", function () {
  navLinks.classList.remove("active");
});
