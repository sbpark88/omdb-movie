import { Component } from "../core/MyReact";
import FruitItem from "../components/FruitItem";

export default class About extends Component {
  constructor() {
    const state = {
      fruits: [
        { name: "Apple", price: 1000 },
        { name: "Banana", price: 2000 },
        { name: "Cherry", price: 3000 },
      ],
    };
    super({ state });
  }
  render() {
    this.el.innerHTML = `
      <h1>About Page</h1>
      <p>Name: <input /></p>
      <p>Price: <input /></p>
      <button type="button">추가</button>
      <ul></ul>
    `;

    const btnEl = this.el.querySelector("button");
    const [nameEl, priceEl] = this.el.querySelectorAll("input");
    const ulEl = this.el.querySelector("ul");
    btnEl.addEventListener("click", () => {
      this.state.fruits.push({ name: nameEl.value, price: priceEl.value });
      this.render();
    });
    ulEl.append(
      ...this.state.fruits.map((fruit) => new FruitItem({ props: fruit }).el),
    );
  }
}
