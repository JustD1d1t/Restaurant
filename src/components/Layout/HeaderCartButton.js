import classes from "./HeaderCartButton.module.scss";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Koszyk</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
