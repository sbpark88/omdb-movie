import { Component, Payload } from "@core/MyReact";
import "./MovieItem.scss";
import { Movie } from "@store/movie";

export default class MovieItem extends Component {
  constructor(movie: Movie) {
    const tagName = "a";
    super({ tagName, props: movie as Record<string, any> });
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
