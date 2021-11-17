import "./App.scss";
import React, { Suspense } from "react";

import { Route, Switch } from "react-router";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";
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
      <Suspense
        fallback={
          <div className="align-center">
            <LoadingSpinner />
          </div>
        }
      >
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
      <Footer />
    </>
  );
}

export default App;
