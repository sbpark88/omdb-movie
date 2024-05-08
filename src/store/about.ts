import { Store } from "@core/MyReact";
// import $K from "@constants";
import $K from "src/constants";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

const store = new Store<State>({
  photo: $K.LOGO_URL,
  name: "sbpark88",
  email: "devsbipa@gmail.com",
  blog: $K.BLOG_URL,
  github: $K.GITHUB_URL,
  repository: `${$K.GITHUB_URL}/omdb-movie`,
});

export default store;
