import { Component } from "../core/MyReact";
import aboutStore from "../store/about";
import "./About.scss";
export default class About extends Component {
  render() {
    const { photo, name, email, github, blog } = aboutStore.state;

    this.el.classList.add("container", "about");
    this.el.innerHTML = `
      <div style="background-image: url(${photo})" class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="mailto:${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">Go to GitHub</a></p>
      <p><a href="${blog}" target="_blank">Go to Blog</a></p>
    `;
  }
}
