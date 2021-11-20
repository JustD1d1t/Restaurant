import Button from "../Layout/Button";
import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.scss";
const MenuItem = (props) => {
  const { title, description, price } = props;
  return (
    <div className={classes["menu-item"]}>
      <div className={classes["menu-item__details"]}>
        <div className={classes["menu-item__description"]}>
          <h4 className="h4">{title}</h4>
          {description && <p className="fw300">{description}</p>}
        </div>
        <p className={classes["menu-item__price"]}>{price} PLN</p>
      </div>
      <MenuItemForm></MenuItemForm>
      {/* <div className={`${classes["menu-item__form"]} mar-10`}>
        <input
          type="number"
          min={1}
          max={5}
          defaultValue={1}
          className="fw600"
        />
        <Button className={classes.button}>Dodaj</Button>
      </div> */}
    </div>
  );
};

export default MenuItem;
