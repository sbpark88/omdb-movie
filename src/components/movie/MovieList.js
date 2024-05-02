import { Component } from "../../core/MyReact";
import movieStore from "../../store/movie";
import MovieItem from "./MovieItem";
import "./MovieList.scss";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => this.render());
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = `
      <div class="movies"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ props: movie }).el,
      ),
    );
  }
}