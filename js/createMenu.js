export default function createMenu() {
  const container = document.querySelector("nav");
  const { pathname } = document.location;

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
            <a href="/index.html" class="nav-list__style ${
              pathname === "/index.html" ? "active" : ""
            }">Home</a>
          </li>
          <li>
            <a href="/index.html#about" class="nav-list__style">About</a>
          </li>
          <li>
            <a href="/projects.html" class="nav-list__style ${
              pathname === "/projects.html" ? "active" : ""
            }">Projects</a>
          </li>
          <li>
            <a href="/index.html#contact" class="nav-list__style">Contact</a>
          </li>
          <div class="toggle-style">
            <input type="checkbox" id="theme" class="toggle-input" checked />
            <label for="theme" class="toggle-label">
              <img
                src="./assets/moon-solid.svg"
                alt="Dark mode"
                class="toggle-icon"
              />
            </label>
          </div>
          <a href="" class="btn btn-nav">Resume</a>
        </ul>
        <div class="burger" aria-label="menu">
          <div class="line1 burger-lines"></div>
          <div class="line2 burger-lines"></div>
          <div class="line3 burger-lines"></div>
        </div>
`;
}
