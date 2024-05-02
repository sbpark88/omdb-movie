import { Component } from "../../core/MyReact";
import Button from "../atomic/Button";
import InputText from "../atomic/InputText";
import movieStore, { searchMovies } from "../../store/movie";

import "./Search.scss";
export default class Search extends Component {
  render() {
    const input = new InputText({
      state: { placeholder: "Enter the movie title to search!" },
    }).el;
    const btn = new Button({
      state: {
        textContent: "search!",
        classes: ["btn--primary"],
      },
    }).el;
    this.el.append(input, btn);

    this.el.classList.add("search");
    const isSearchEmpty = () => movieStore.state.searchText.trim() === "";
    input.addEventListener("input", () => {
      movieStore.state.searchText = input.value;
    });
    input.addEventListener("keydown", (event) => {
      const isEnterKey = event.key === "Enter";
      if (!isEnterKey || isSearchEmpty()) return;
      searchMovies(1);
    });
    btn.addEventListener("click", () => {
      if (isSearchEmpty()) return;
      searchMovies(1);
    });
  }
}
