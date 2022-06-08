import createMenu from "./createMenu.js";

createMenu();

//TOGGLE LIGHT AND DARK THEME

const page = document.querySelector(".page");
const toggler = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");
const logo = document.querySelector(".nav-logo__item");

setCheckedState();

function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggler.checked = isTrue(localStorage.getItem("checked"));
    toggleTheme();
  }
}

function toggleTheme() {
  replaceClass();
  toggleIconTheme();
  updateLocalStorage();
}

function replaceClass() {
  if (toggler.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
}

function toggleIconTheme() {
  if (page.classList.contains("light")) {
    toggleIcon.src = "./assets/moon-solid.svg";
    toggleIcon.alt = "Switch to Dark Mode";
    logo.src = "/assets/james-logo-black.svg";

    // for (const div of burgerLines) {
    //   div.classList.remove("burger-dark");
    // }
  } else {
    toggleIcon.src = "./assets/sun-solid.svg";
    toggleIcon.alt = "Switch to Light Mode";
    logo.src = "/assets/james-logo-white.svg";

    // burgerLines.classList.add("dark-lines");
    // for (const div of burgerLines) {
    //   div.classList.add("burger-dark");
    // }
  }
}

function updateLocalStorage() {
  localStorage.setItem("checked", toggler.checked);
}

function isTrue(value) {
  return value === "true";
}

toggler.addEventListener("change", toggleTheme);

//BURGER MENU

const navSlider = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    // burger.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navSlider();
