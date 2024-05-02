import { createRouter } from "../core/MyReact";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: MovieDetails },
]);
