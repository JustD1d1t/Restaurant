import Button from "../Layout/Button";
import classes from "./MenuItemForm.module.scss";
const MenuItemForm = (props) => {
  return (
    <div className={`${classes["menu-item__form"]} mar-10`}>
      <input type="number" min={1} max={5} defaultValue={1} className="fw600" />
      <Button className={classes.button}>Add to Cart</Button>
    </div>
  );
};

export default MenuItemForm;
