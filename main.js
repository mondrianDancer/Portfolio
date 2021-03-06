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

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

// Show "arrow up" button when scolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arorw up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Projects
const workBtnContainer = document.querySelector(".work__categories");
const ProjectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project"); //array
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) return;
  //Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");

  ProjectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((projects) => {
      if (filter === "*" || filter === projects.dataset.type)
        projects.classList.remove("invisible");
      else projects.classList.add("invisible");
    });
    ProjectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
