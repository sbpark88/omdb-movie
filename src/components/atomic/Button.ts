import { Component, Payload } from "@core/MyReact";

import "./Button.scss";

interface ButtonPayload extends Payload {
  state: {
    textContent: string;
    classes?: string[];
  };
}

export default class Button extends Component {
  constructor(payload: ButtonPayload) {
    const { state = { textContent: "", classes: null } } = payload;
    const tagName = "button";
    super({ tagName, state });
  }
  render() {
    this.el.classList.add("btn");
    this.state?.classes &&
      this.el.classList.add(...(this.state.classes as string[]));
    this.el.textContent = <string>this.state.textContent;
  }
}
