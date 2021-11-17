import WidthContainer from "../components/Layout/WidthContainer";
import Introduction from "../components/MainPage/Introduction";
import MealsOffer from "../components/MainPage/MealsOffer";
import Banner from "../components/MainPage/Banner";
const Main = (props) => {
  return (
    <>
      <WidthContainer>
        <Introduction />
      </WidthContainer>
      <MealsOffer />
      <WidthContainer>
        <Banner />
      </WidthContainer>
    </>
  );
};

export default Main;
