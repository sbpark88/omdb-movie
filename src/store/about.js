import { Store } from "../core/MyReact";
import $K from "../constants";

const store = new Store({
  photo: $K.LOGO_URL,
  name: "sbpark88",
  email: "devsbipa@gmail.com",
  blog: $K.BLOG_URL,
  github: $K.GITHUB_URL,
  repository: `${$K.GITHUB_URL}/omdb-movie`,
});

export default store;
