import { Component } from "../../core/MyReact";

import "./InputText.scss";

export default class InputText extends Component {
  /**
   * Button constructor
   *
   * @constructor
   * @param {object} [payload]
   * @param {string} [payload.state.placeholder]
   * @param {string} [payload.state.classes]
   * @param {string} [payload.state.value]
   */
  constructor(payload) {
    const state = payload?.state;
    const tagName = "input";
    super({ tagName, state });
  }
  render() {
    this?.state?.placeholder && (this.el.placeholder = this.state.placeholder);
    this?.state?.classes && this.el.classList.add(this.state.classes);
    this?.state?.value && (this.el.value = this.state.value);
  }
}
