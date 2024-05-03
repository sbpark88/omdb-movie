import { Component } from "../../../core/MyReact";

import "./Loader.scss";

export default class Loader extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.classList.add("the-loader", "hide");
  }

  start() {
    this.el.classList.remove("hide");
  }

  stop() {
    this.el.classList.add("hide");
  }
}
