import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";

const MenuItem = (props) => {
  const dispatch = useDispatch();

  const { title, description, price, id } = props;
  const addItemToCart = (amount) => {
    dispatch(
      addToCart({
        id,
        price,
        title,
        amount: +amount,
      })
    );
  };
  return (
    <div className={classes["menu-item"]}>
      <div className={classes["menu-item__details"]}>
        <div className={classes["menu-item__description"]}>
          <h4 className="h4">{title}</h4>
          {description && <p className="fw300">{description}</p>}
        </div>
        <p className={classes["menu-item__price"]}>{price} $</p>
      </div>
      <MenuItemForm addItem={addItemToCart}></MenuItemForm>
    </div>
  );
};

export default MenuItem;
