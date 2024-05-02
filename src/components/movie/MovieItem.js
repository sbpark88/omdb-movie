import { Component } from "../../core/MyReact";
import "./MovieItem.scss";

export default class MovieItem extends Component {
  constructor({ props }) {
    const tagName = "a";
    super({ tagName, props });
  }
  render() {
    const { Poster, Title, Type, Year, imdbID } = this.props;
    this.el.setAttribute("href", `#/movie?id=${imdbID}`);
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${Poster})`;
    this.el.innerHTML = `
      <div class="info">
        <div class="year">${Year}</div>
        <div class="title">${Title}</div>
      </div>
    `;
  }
}
