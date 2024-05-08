import { Store } from "@core/MyReact";
import { $fetch } from "@utils/fetch";

const MOVIE_COUNT_PER_PAGE = 10;

interface State {
  searchText: string;
  page: number;
  movies: Movie[];
  movieDetails: MovieDetails;
  isRemain: boolean;
  loading: boolean;
  message: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

const store = new Store<State>({
  searchText: "",
  page: 0,
  movies: [],
  movieDetails: {} as MovieDetails,
  isRemain: false,
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page: number) => {
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

function updateMovies(search: Movie[], totalResults: number, page: number) {
  store.state.movies = [...store.state.movies, ...search];
  store.state.isRemain = totalResults > MOVIE_COUNT_PER_PAGE * page;
}

function updateMessage(message: string) {
  store.state.message = message;
  store.state.isRemain = false;
}

export const getMovieDetails = async (imdbId: string) => {
  try {
    store.state.movieDetails = await $fetch.GET(`/api/movie/${imdbId}`);
  } catch (error) {
    console.error("getMovieDetails error: ", error);
  }
};
