"use strict";

import("../src/style/main.scss");
import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root.append(new App().el);

router();
