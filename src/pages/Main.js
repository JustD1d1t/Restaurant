import React from "react";

import WidthContainer from "../components/Layout/WidthContainer";
import Introduction from "../components/MainPage/Introduction";
import { Suspense } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const Banner = React.lazy(() => import("../components/MainPage/Banner"));
const MealsOffer = React.lazy(() =>
  import("../components/MainPage/MealsOffer")
);
const Main = (props) => {
  return (
    <>
      <WidthContainer>
        <Introduction />
      </WidthContainer>
      <Suspense
        fallback={
          <div className="align-center">
            <LoadingSpinner />
          </div>
        }
      >
        <MealsOffer />
        <WidthContainer>
          <Banner />
        </WidthContainer>
      </Suspense>
    </>
  );
};

export default Main;
