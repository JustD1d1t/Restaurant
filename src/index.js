import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./scss/_colors.scss";
import "./index.scss";
import "./scss/_typography.scss";
import "./scss/_flex.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
