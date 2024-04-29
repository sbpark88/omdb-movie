import { Component } from "./core/BaseComponent";

export default class App extends Component {
  constructor() {
    super({});
  }

  render() {
    this.el.append();
  }
}
