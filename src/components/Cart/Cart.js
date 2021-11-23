import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Layout/Modal";
import { closeCart, confirmOrder } from "../../store/actions/cart";
import classes from "./Cart.module.scss";
import Button from "../Layout/Button";
import CartForm from "./CartForm";
const Cart = () => {
  const isCartVisible = useSelector((state) => state.cart.isCartOpen);
  const isCartEmpty = useSelector((state) => state.cart.products.length === 0);
  const isCartConfirmed = useSelector((state) => state.cart.isCartConfirmed);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  const handleConfirmOrder = () => {
    dispatch(confirmOrder());
  };
  return (
    <Modal show={isCartVisible} closed={handleCloseCart}>
      <div className={classes["cart"]}>
        <p className="h3 pad-10">Cart</p>
        <CartItems />
        <p className={classes["cart__info"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          fugiat delectus in, impedit, natus enim ea obcaecati numquam officiis
          ipsa quos? Provident laborum nemo nisi itaque iste consequatur
          laudantium officiis?
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
            disabled={isCartEmpty}
            onClick={handleConfirmOrder}
          >
            Complete order
          </Button>
        </div>
        {isCartConfirmed && <CartForm />}
      </div>
    </Modal>
  );
};

export default Cart;
