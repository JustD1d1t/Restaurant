export const ADD_TO_CART = "ADD_TO_CART";
export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";
export const CONFIRM_ORDER = "CONFIRM_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: {
      id: product.id,
      price: product.price,
      title: product.title,
      amount: product.amount,
    },
  };
};

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};
export const closeCart = () => {
  return {
    type: CLOSE_CART,
  };
};
export const increaseAmount = (id) => {
  return {
    type: INCREASE_AMOUNT,
    id,
  };
};
export const decreaseAmount = (id) => {
  return {
    type: DECREASE_AMOUNT,
    id,
  };
};
export const confirmOrder = () => {
  return {
    type: CONFIRM_ORDER,
  };
};
export const clearOrder = () => {
  return {
    type: CLEAR_ORDER,
  };
};
