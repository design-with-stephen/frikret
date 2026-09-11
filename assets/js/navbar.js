const navbar = document.querySelector(".nav-bar");

//px scrolled before navbar switches state
const SCROLL_THRESHOLD = 60;

function updateNavbar() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled");
  }
}

updateNavbar();

window.addEventListener("scroll", updateNavbar, { passive: true });
