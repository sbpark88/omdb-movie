import { Component } from "../core/MyReact";
import Headline from "../components/Headline";
import "../style/routes/Home.scss";
export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    this.el.classList.add("container");
    this.el.append(headline);
  }
}
