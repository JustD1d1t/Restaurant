import classes from "./HeaderCartButton.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import { openCart } from "../../store/actions/cart";
import React, { useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalAmount = useSelector((state) => {
    if (state.cart.products.length > 0) {
      return state.cart.products
        .map((item) => item.amount)
        .reduce((a, b) => a + b);
    } else return 0;
  });

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (products.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [products, totalAmount]);

  const openCartHandler = () => {
    dispatch(openCart());
  };

  return (
    <button className={btnClasses} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Koszyk</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
