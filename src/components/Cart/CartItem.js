import classes from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "../../store/actions/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, amount, price } = props;
  const fullPriceForItem = price * amount;

  const increaseItemAmount = () => {
    dispatch(increaseAmount(props.id));
  };
  const decreaseItemAmount = () => {
    dispatch(decreaseAmount(props.id));
  };
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item__meal-name"]}>
        <h3>
          {props.index + 1}.{title}
        </h3>
      </div>
      <div className={classes["cart-item__summary"]}>
        <div className={classes["cart-item__amount"]}>
          <button onClick={decreaseItemAmount}>
            <span>-</span>
          </button>
          <p>{amount}</p>
          <button onClick={increaseItemAmount}>
            <span>+</span>
          </button>
        </div>
        <p className={classes["cart-item__price"]}>
          {fullPriceForItem.toFixed(2)} $
        </p>
      </div>
    </div>
  );
};

export default CartItem;
