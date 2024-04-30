import { Component } from "../core/MyReact";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    const tagName = "h1";
    super({ tagName });
    messageStore.subscribe("message", (newValue) => this.render());
  }

  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
