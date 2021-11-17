import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

import "./scss/_colors.scss";
import "./index.scss";
import "./scss/_typography.scss";
import "./scss/_flex.scss";
import "./scss/_margin-padding.scss";
import "aos/dist/aos.css";
import App from "./App";
AOS.init({
  delay: 100,
  duration: 700,
  offset: 200,
  easing: "ease-in-out",
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
