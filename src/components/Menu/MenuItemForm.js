import Button from "../Layout/Button";
import classes from "./MenuItemForm.module.scss";
import React, { useRef } from "react";

const MenuItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }
    props.addItem(amountInputRef.current.value);
  };
  return (
    <form
      className={`${classes["menu-item__form"]} mar-10`}
      onSubmit={submitHandler}
    >
      <input
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        className="fw600"
        ref={amountInputRef}
      />
      <Button className={classes.button} type="submit">
        Add to Cart
      </Button>
    </form>
  );
};

export default MenuItemForm;
