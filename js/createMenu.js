export default function createMenu() {
  const container = document.querySelector("nav");

  container.innerHTML = `
<div class="nav-logo">
          <img
            class="nav-logo__item"
            src="/assets/james-logo-black.svg"
            alt="james logo"
          />
        </div>
        <ul class="nav-list">
          <li>
            <a href="/index.html" class="active nav-style">Home</a>
          </li>
          <li>
            <a href="" class="nav-style">About</a>
          </li>
          <li>
            <a href="" class="nav-style">Projects</a>
          </li>
          <li>
            <a href="" class="nav-style">Contact</a>
          </li>
          <div class="toggle">
            <input type="checkbox" id="theme" class="toggle-input" checked />
            <label for="theme" class="toggle-label">
              <img
                src="./assets/moon-solid.svg"
                alt="Dark mode"
                class="toggle-icon"
              />
            </label>
          </div>
          <a class="btn btn-nav">Resume</a>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
`;
}
