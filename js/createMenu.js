export default function createMenu() {
  const container = document.querySelector("nav");
  const { pathname } = document.location;

  container.innerHTML = `
        <div class="nav-logo">
        <a href="/index.html">
          <img
            class="nav-logo__item"
            src="/assets/james-logo-black.svg"
            alt="james logo"
          />
          </a>
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
                class="toggle-label__icon"
              />
            </label>
          </div>
          <a
          class="btn btn-nav"
          href="/assets/James-Badenhorst-CV-2022.pdf"
          download
          >Resume</a>
        </ul>
        <div class="burger" aria-label="menu">
          <div class="line1 burger-lines"></div>
          <div class="line2 burger-lines"></div>
          <div class="line3 burger-lines"></div>
        </div>
`;
}
