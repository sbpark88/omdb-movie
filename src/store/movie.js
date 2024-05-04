import { Store } from "../core/MyReact";
import $K from "../constants";
import { $fetch } from "../APIs/fetch";

const MOVIE_COUNT_PER_PAGE = 10;

const store = new Store({
  searchText: "",
  page: 0,
  movies: [],
  movieDetails: {},
  isRemain: false,
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) resetStore();
  const queries = {
    title: store.state.searchText,
    page,
  };

  try {
    const { Search, totalResults, Response, Error } = await $fetch.GET(
      "/api/movie",
      queries,
    );
    const isMovieFound = Response === "True";
    isMovieFound
      ? updateMovies(Search, totalResults, page)
      : updateMessage(Error);
  } catch (error) {
    console.error("searchMovies error: ", error);
  }
  store.state.loading = false;
};

function resetStore() {
  store.state.movies = [];
  store.state.message = "";
}

function updateMovies(search, totalResults, page) {
  store.state.movies = [...store.state.movies, ...search];
  store.state.isRemain = totalResults > MOVIE_COUNT_PER_PAGE * page;
}

function updateMessage(message) {
  store.state.message = message;
  store.state.isRemain = false;
}

export const getMovieDetails = async (imdbId) => {
  try {
    store.state.movieDetails = await $fetch.GET(`/api/movie/${imdbId}`);
  } catch (error) {
    console.error("getMovieDetails error: ", error);
  }
};
