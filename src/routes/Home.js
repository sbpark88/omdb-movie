import { Component } from "../core/MyReact";

export default class Home extends Component {
  constructor() {
    super({});
  }

  render() {
    this.el.innerHTML = `
      <h1>Home Page</h1>
    `;
  }
}
