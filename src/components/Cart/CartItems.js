import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./CartItems.module.scss";

const CartItems = (props) => {
  const items = useSelector((state) =>
    state.cart.products.map((item, index) => (
      <CartItem
        key={item.id}
        id={item.id}
        index={index}
        title={item.title}
        amount={item.amount}
        price={item.price}
      />
    ))
  );
  return <div className={classes["cart-items"]}>{items}</div>;
};

export default CartItems;
