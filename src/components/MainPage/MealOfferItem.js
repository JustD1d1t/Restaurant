import Button from "../Layout/Button";
import classes from "./MealOfferItem.module.scss";
const MealOfferItem = (props) => {
  return (
    <div
      className={classes["meal-item"]}
      data-aos="zoom-in-up"
      data-aos-delay={props.delay}
    >
      <div>
        <img src={props.img} alt="" />
        <h5 className="h5">{props.title}</h5>
      </div>
      <p>{props.description}</p>
      <Button className={classes.button}>Zobacz więcej</Button>
    </div>
  );
};

export default MealOfferItem;
