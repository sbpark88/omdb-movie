import { Component } from "../../core/MyReact";

import "./Button.scss";

export default class Button extends Component {
  /**
   * Button constructor
   *
   * @constructor
   * @param {object} payload
   * @param {string} payload.state.textContent
   * @param {string} [payload.state.modifier] - undefined, primary
   */
  constructor(payload) {
    const { state = { textContent: "", modifier: undefined } } = payload;
    const tagName = "button";
    super({ tagName, state });
  }
  render() {
    this.el.classList.add("btn");
    this.state?.modifier &&
      this.el.classList.add(`btn--${this.state.modifier}`);
    this.el.textContent = this.state.textContent;
  }
}
