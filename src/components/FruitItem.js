import { Component } from "../core/MyReact";

export default class FruitItem extends Component {
  /**
   * @constructor
   * @param {object} props
   * @param {string} props.name
   * @param {number} props.price
   */
  constructor({ props }) {
    const tagName = "li";
    super({ tagName, props });
  }

  render() {
    this.el.innerHTML = `
      <span>${this.props.name}</span>
      <span>${this.props.price}</span>
    `;

    this.el.addEventListener("click", () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
