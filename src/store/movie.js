import { Store } from "../core/MyReact";
import $K from "../constants";
import { $fetch } from "../APIs/fetch";

const MOVIE_COUNT_PER_PAGE = 10;

const store = new Store({
  searchText: "",
  page: 0,
  movies: [],
  isRemain: false,
  loading: false,
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) store.state.movies = [];
  const queries = {
    apiKey: process.env.OMDB_API_KEY,
    s: store.state.searchText,
    page: page,
  };

  const { Search, totalResults } = await $fetch.GET($K.API_URL, queries);
  store.state.movies = [...store.state.movies, ...Search];
  store.state.isRemain = totalResults > MOVIE_COUNT_PER_PAGE * page;
  store.state.loading = false;
};
