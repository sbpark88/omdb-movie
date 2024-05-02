import { Component } from "../../core/MyReact";

import "./Button.scss";

export default class Button extends Component {
  /**
   * Button constructor
   *
   * @constructor
   * @param {object} payload
   * @param {string} payload.state.textContent
   * @param {string[]} [payload.state.classes]
   */
  constructor(payload) {
    const { state = { textContent: "", classes: null } } = payload;
    const tagName = "button";
    super({ tagName, state });
  }
  render() {
    this.el.classList.add("btn");
    this.state?.classes && this.el.classList.add(...this.state.classes);
    this.el.textContent = this.state.textContent;
  }
}
