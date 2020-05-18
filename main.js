"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) navbar.classList.add("navbar--dark");
  else navbar.classList.remove("navbar--dark");
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const link = e.target.dataset.link;
  if (link == null) return;
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (e) => {
  scrollIntoView(e.target.dataset.link);
});

// Make home slowly fade to transparent as the window scrolls down
const homeContent = document.querySelector(".home__content");
const homeHeight = homeContent.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //console.log(1 - window.scrollY / homeHeight);
  homeContent.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
