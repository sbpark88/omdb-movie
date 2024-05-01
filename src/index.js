"use strict";

import App from "./App";
import router from "./routes";
import "../src/style/main.scss";

const root = document.querySelector("#root");
root.append(new App().el);

router();
