import { Component } from "../core/MyReact";
import movieStore, { getMovieDetails } from "../store/movie";

import "./MovieDetails.scss";
export default class MovieDetails extends Component {
  async render() {
    this.el.classList.add("container", "the-movie");
    this.el.innerHTML = `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `;

    await getMovieDetails(history.state.id);
    const {
      Poster,
      Title,
      Released,
      Runtime,
      Country,
      Plot,
      Ratings,
      Actors,
      Director,
      Production,
      Genre,
    } = movieStore.state.movieDetails;

    this.el.innerHTML = `
      <div class="poster"
           style="background-image: url(${Poster.replace("SX300", "SX700")})">
      </div>
      <div class="specs">
        <div class="title">${Title}</div>
        <div class="labels">
          <span>${Released}</span>
          &nbsp;/&nbsp;
          <span>${Runtime}</span>
          &nbsp;/&nbsp;
          <span>${Country}</span>
        </div>
        <div class="plot">${Plot}</div>
        <div>
          <h3>Ratings</h3>
          ${Ratings.map((rating) => {
            return `<p>${rating.Source} - ${rating.Value}</p>`;
          }).join("")}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${Genre}</p>
        </div>
      </div>
    `;
  }
}
