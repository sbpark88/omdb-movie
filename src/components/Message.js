import { Component } from "../core/MyReact";
import messageStore from "../store/message";

export default class Message extends Component {
  constructor() {
    super();
    messageStore.subscribe("message", () => this.render());
  }
  render() {
    this.el.innerHTML = `
      <h2>${messageStore.state.message}</h2>
    `;
  }
}
