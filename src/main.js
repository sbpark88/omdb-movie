import App from "./App";
import router from "./routes";
import "./styles/main.scss";

const root = document.querySelector("#root");
root.append(new App().el);

router();
