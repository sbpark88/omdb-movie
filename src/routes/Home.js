import { Component } from "../core/MyReact";
import Headline from "../components/sub-pages/home/Headline";
import Search from "../components/movie/Search";
import MovieList from "../components/movie/MovieList";
import Button from "../components/atomic/Button";
import Loader from "../components/common/Loader";
import movieStore, { searchMovies } from "../store/movie";
import "./Home.scss";
export default class Home extends Component {
  async render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const btnMore = new Button({
      state: { textContent: "View more..", classes: ["view-more", "hide"] },
    }).el;
    const loader = new Loader();

    this.el.classList.add("container");
    this.el.append(headline);
    this.el.append(search);
    this.el.append(movieList);
    this.el.append(loader.el);
    this.el.append(btnMore);

    btnMore.addEventListener("click", async () => {
      btnMore.classList.add("hide");
      await searchMovies(movieStore.state.page + 1);
      toggleBtnMore();
    });
    movieStore.subscribe("isRemain", toggleBtnMore);
    movieStore.subscribe("loading", toggleLoader);

    function toggleBtnMore() {
      movieStore.state.isRemain
        ? btnMore.classList.remove("hide")
        : btnMore.classList.add("hide");
    }
    function toggleLoader() {
      movieStore.state.loading ? loader.start() : loader.stop();
    }
  }
}
