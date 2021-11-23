import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
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
  offset: 200,
  easing: "ease-in-out",
});

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
