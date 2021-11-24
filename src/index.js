import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { HashRouter } from "react-router-dom";
import AOS from "aos";

import cartReducer from "./store/reducers/cart";

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
  offset: 100,
  easing: "ease-in-out",
  once: true,
});

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
