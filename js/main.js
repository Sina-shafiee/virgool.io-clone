"use strict";

// fixed navbar

const navbar = document.getElementById("navbar");
const navbarPos = navbar.offsetTop;

let oldValue = 0;
let newValue = 0;

const stickToTop = () => {
  newValue = window.pageYOffset;
  window.pageYOffset > navbarPos && oldValue < newValue
    ? navbar.classList.add("stick")
    : navbar.classList.remove("stick");

  oldValue = newValue;
};

window.onscroll = () => stickToTop();
