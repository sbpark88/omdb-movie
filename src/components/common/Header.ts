import { Component } from "@core/MyReact";
import $K from "src/constants";
import "./Header.scss";

interface Menu {
  name: string;
  href: string;
}

export default class Header extends Component {
  constructor() {
    const tagName = "header";
    const state = {
      menus: [
        { name: "Search", href: "#/" },
        { name: "Movie", href: "#/movie?id=tt4520988" },
        { name: "About", href: "#/about" },
      ] as Menu[],
    };
    super({ tagName, state });
    window.addEventListener("popstate", () => this.render());
  }
  render() {
    this.el.innerHTML = `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.com
      </a>
      ${NavMenu(this.state.menus as Menu[])}
      <a href="#/about" class="user">
        <img src="${$K.LOGO_URL}" alt="User">
      </a>
      `;
  }
}

function NavMenu(menus: Menu[]) {
  return `<nav>
            <ul>
              ${menus.map(MenuLi).join("")}
            </ul>     
          </nav>`;

  function MenuLi({ href, name }: Menu) {
    return `<li>
              <a href="${href}" class="${isActive(href) ? "active" : ""}">
                ${name}
              </a>
            </li>`;

    function isActive(href: string) {
      const url = href.split("?")[0];
      const hash = location.hash.split("?")[0];
      return url === hash;
    }
  }
}
