import { Component } from "../core/MyReact";

export default class Header extends Component {
  constructor() {
    const tagName = "header";
    super({ tagName });
  }

  render() {
    this.el.innerHTML = `
      <a href="#/">Main</a>
      <a href="#/about">About</a>
    `;
  }
}
