import { Component } from "./core/MyReact";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super({});
  }

  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new Header(), routerView);
  }
}
