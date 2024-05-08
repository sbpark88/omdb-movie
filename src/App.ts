import { Component } from "@core/MyReact";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

export default class App extends Component {
  render() {
    const header = new Header().el;
    const footer = new Footer().el;
    const routerView = document.createElement("router-view");
    this.el.append(header, routerView, footer);
  }
}
