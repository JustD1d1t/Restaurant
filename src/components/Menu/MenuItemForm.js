import Button from "../Layout/Button";
import classes from "./MenuItemForm.module.scss";
import React, { useRef } from "react";

const MenuItemForm = (props) => {
  const amountInputRef = useRef();
  const confirmFormCart = () => {
    props.addItem(amountInputRef.current.value);
  };
  return (
    <div className={`${classes["menu-item__form"]} mar-10`}>
      <input
        type="number"
        min={1}
        max={5}
        defaultValue={1}
        className="fw600"
        ref={amountInputRef}
      />
      <Button className={classes.button} onClick={confirmFormCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default MenuItemForm;
