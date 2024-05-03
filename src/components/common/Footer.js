import { Component } from "../../core/MyReact";
import "./Footer.scss";
export default class Footer extends Component {
  constructor() {
    const tagName = "footer";
    super({ tagName });
  }

  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://github.com/sbpark88/omdb-movie">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://sbpark88.github.io">
          ${new Date().getFullYear()}
          Hogwarts Blog
        </a>
      </div>
    `;
  }
}
