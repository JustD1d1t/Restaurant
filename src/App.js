import "./App.scss";
import React from "react";

import { Route, Switch } from "react-router";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./pages/Main";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Comments from "./pages/Comments";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/breakfast" exact>
          <Breakfast />
        </Route>
        <Route path="/lunch" exact>
          <Lunch />
        </Route>
        <Route path="/menu" exact>
          <Menu />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
