import { Component } from "../../core/MyReact";
import $K from "../../constants";
import "./Header.scss";

export default class Header extends Component {
  constructor() {
    const tagName = "header";
    const state = {
      menus: [
        { name: "Search", href: "#/" },
        { name: "Movie", href: "#/movie?id=tt4520988" },
        { name: "About", href: "#/about" },
      ],
    };
    super({ tagName, state });
    window.addEventListener("popstate", () => this.render());
  }
  render() {
    this.el.innerHTML = `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.com
      </a>
      ${NavMenu(this.state.menus)}
      <a href="#/about" class="user">
        <img src="${$K.LOGO_URL}" alt="User">
      </a>
      `;
  }
}

function NavMenu(menus) {
  return `<nav>
            <ul>
              ${menus.map(MenuLi).join("")}
            </ul>     
          </nav>`;

  function MenuLi({ href, name }) {
    return `<li>
              <a href="${href}" class="${isActive(href) ? "active" : ""}">
                ${name}
              </a>
            </li>`;

    function isActive(href) {
      const url = href.split("?")[0];
      const hash = location.hash.split("?")[0];
      return url === hash;
    }
  }
}
