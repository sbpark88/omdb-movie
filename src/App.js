import { Component } from "./core/MyReact";
import Header from "./components/common/Header";

export default class App extends Component {
  render() {
    const header = new Header().el;
    const routerView = document.createElement("router-view");
    this.el.append(header, routerView);
  }
}
