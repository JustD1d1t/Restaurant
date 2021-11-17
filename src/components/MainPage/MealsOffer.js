import offer1Img from "../../assets/img/offer1.png";
import offer2Img from "../../assets/img/offer2.png";
import offer3Img from "../../assets/img/offer3.png";
import offer4Img from "../../assets/img/offer4.png";
import Button from "../Layout/Button";
import classes from "./MealsOffer.module.scss";
import WidthContainer from "../Layout/WidthContainer";
import MealOfferItem from "./MealOfferItem";

const DUMMY_MEALS_OFFER = [
  {
    id: 1,
    img: offer1Img,
    title: "Śniadanie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate perspiciatis facilis vel rem aliquid iste, nostrum ratione animi ab ullam?",
  },
  {
    id: 2,
    img: offer2Img,
    title: "Lunche",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolores distinctio harum, ut natus nisi praesentium possimus debitis voluptatum voluptates fuga atque. Dolore, fugiat cupiditate.",
  },
  {
    id: 3,
    img: offer3Img,
    title: "Obiady",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia accusamus dolores necessitatibus ipsum repudiandae vel nam, rem nemo magnam voluptas quaerat.",
  },
  {
    id: 4,
    img: offer4Img,
    title: "Kolacje",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt magnam earum ratione praesentium totam officiis accusamus id?",
  },
];

const MealsOffer = () => {
  let delay = 150;
  const meals = DUMMY_MEALS_OFFER.map((meal) => {
    delay += 150;
    return (
      <MealOfferItem
        key={meal.id}
        img={meal.img}
        title={meal.title}
        description={meal.description}
        delay={delay}
      />
    );
  });
  return (
    <section className={classes["meals-offer"]}>
      <div className={classes["background-image"]}>
        <div></div>
      </div>
      <WidthContainer className={classes.fullHeight}>
        <div className={classes["meals-container"]}>{meals}</div>
      </WidthContainer>
    </section>
  );
};

export default MealsOffer;
