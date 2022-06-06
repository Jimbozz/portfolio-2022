//TOGGLE LIGHT AND DARK THEME

const page = document.querySelector(".page");
const toggle = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");
const logo = document.querySelector(".nav-logo__item");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  replaceClass();
  // replace icons on page
  toggleIconTheme();
  // set the value of the "checked" key in localStorage
  updateLocalStorage();
}

function replaceClass() {
  if (toggle.checked) {
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
  } else {
    toggleIcon.src = "./assets/sun-solid.svg";
    toggleIcon.alt = "Switch to Light Mode";
    logo.src = "/assets/james-logo-white.svg";
  }
}

function updateLocalStorage() {
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);

//BURGER MENU

const navSlider = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-unique");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    // burger.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navSlider();
