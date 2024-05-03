import { Component } from "../core/MyReact";
import notFoundImage from "../assets/images/404.jpg";

import "./NotFound.scss";
export default class NotFound extends Component {
  render() {
    this.el.classList.add("container", "not-found");
    this.el.innerHTML = `
      <img src="${notFoundImage}" alt="Not Found" />
    `;

    const headerHeight = document.querySelector("header").clientHeight;
    const footerHeight = document.querySelector("footer").clientHeight;
    const viewHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
    Object.assign(this.el.style, {
      height: viewHeight,
    });

    const image = this.el.querySelector("img");
  }
}
