import { Component } from "../core/MyReact";

export default class About extends Component {
  render() {
    this.el.innerHTML = `
      <h1>About Page</h1>
    `;
  }
}
