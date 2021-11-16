import "./App.scss";
import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router";

import Header from "./components/Layout/Header";
const Main = React.lazy(() => import("./pages/Main"));
const Breakfast = React.lazy(() => import("./pages/Breakfast"));
const Lunch = React.lazy(() => import("./pages/Lunch"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Comments = React.lazy(() => import("./pages/Comments"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<p>Loading</p>}>
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
      </Suspense>
    </>
  );
}

export default App;
