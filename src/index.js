"use strict";

import "../src/style/main.scss"; // reset-css 가 먼저 로드 되어야 한다.
import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root.append(new App().el);

router();
