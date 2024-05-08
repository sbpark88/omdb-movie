import { Component, Payload } from "@core/MyReact";

import "./InputText.scss";

interface InputPayload extends Payload {
  state: {
    placeholder?: string;
    classes?: string[];
    value?: string;
  };
}

export default class InputText extends Component {
  constructor(payload: InputPayload) {
    // constructor(payload: { state: { placeholder: string } }) {
    const state = payload?.state;
    const tagName = "input";
    super({ tagName, state });
  }
  render() {
    const el = this.el as HTMLInputElement;
    this?.state?.placeholder &&
      (el.placeholder = this.state.placeholder as string);
    this?.state?.classes &&
      el.classList.add(...(this.state.classes as string[]));
    this?.state?.value && (el.value = this.state.value as string);
  }
}
