import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Layout/Modal";
import { closeCart } from "../../store/actions/cart";
import classes from "./Cart.module.scss";
import Button from "../Layout/Button";
import CartForm from "./CartForm";
import { useEffect, useState } from "react";
const Cart = () => {
  const isCartVisible = useSelector((state) => state.cart.isCartOpen);
  const isCartEmpty = useSelector((state) => state.cart.products.length === 0);
  const cart = useSelector((state) => state.cart);
  let totalPrice = 0;
  cart.products.forEach((product) => {
    totalPrice += product.price * product.amount;
  });

  const [isCartConfirmed, setIsCartConfirmed] = useState(false);
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closeCart());
    setTimeout(() => {
      handleCancelConfirmationOrder();
    }, 300);
  };

  useEffect(() => {
    if (isCartEmpty) {
      setIsCartConfirmed(false);
    }
  }, [isCartEmpty]);

  const handleConfirmOrder = () => {
    setIsCartConfirmed(true);
  };

  const handleCancelConfirmationOrder = () => {
    setIsCartConfirmed(false);
  };
  return (
    <Modal
      show={isCartVisible}
      closed={handleCloseCart}
      className={classes["modal"]}
    >
      <div className={classes["cart"]}>
        <p className="h3 pad-10">Cart</p>
        <CartItems />
        <p className={classes["cart__info"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          fugiat delectus in, impedit, natus enim ea obcaecati numquam officiis
          ipsa quos? Provident laborum nemo nisi itaque iste consequatur
          laudantium officiis?
        </p>
        <p className={`text-right h4 ${classes["total-value"]}`}>
          Total value: {totalPrice} $
        </p>

        <div className={classes["cart__buttons"]}>
          <Button
            className={classes["change-order-button"]}
            onClick={handleCloseCart}
          >
            Change order
          </Button>
          <Button
            className={classes["complete-order-button"]}
            disabled={isCartEmpty || isCartConfirmed}
            onClick={handleConfirmOrder}
          >
            Complete order
          </Button>
        </div>
        {isCartConfirmed && !isCartEmpty && <CartForm />}
      </div>
    </Modal>
  );
};

export default Cart;
