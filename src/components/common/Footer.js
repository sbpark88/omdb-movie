import { Component } from "../../core/MyReact";
import aboutStore from "../../store/about";
import "./Footer.scss";
export default class Footer extends Component {
  constructor() {
    const tagName = "footer";
    super({ tagName });
  }

  render() {
    const { github, repository } = aboutStore.state;

    this.el.innerHTML = `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          Hogwarts Blog
        </a>
      </div>
    `;
  }
}
