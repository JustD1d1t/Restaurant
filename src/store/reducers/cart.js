import {
  ADD_TO_CART,
  OPEN_CART,
  CLOSE_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CONFIRM_ORDER,
  CLEAR_ORDER,
} from "../actions/cart";

const initialState = {
  products: [],
  isCartOpen: false,
  isCartConfirmed: false,
};

const cartReducer = (state = initialState, action) => {
  let newState;
  let productId;
  let indexInCart;
  switch (action.type) {
    case ADD_TO_CART:
      productId = action.product.id;
      newState = { ...state };
      indexInCart = newState.products.findIndex(
        (element) => element.id === productId
      );
      if (indexInCart !== -1) {
        newState.products[indexInCart].amount += +action.product.amount;
      } else {
        newState.products.push(action.product);
      }
      return newState;
    case OPEN_CART:
      newState = { ...state };
      newState.isCartOpen = !state.isCartOpen;
      return newState;
    case CLOSE_CART:
      newState = { ...state };
      newState.isCartOpen = !state.isCartOpen;
      return newState;
    case INCREASE_AMOUNT:
      newState = { ...state };
      productId = action.id;
      indexInCart = newState.products.findIndex(
        (element) => element.id === productId
      );
      newState.products[indexInCart].amount++;
      return newState;
    case DECREASE_AMOUNT:
      newState = { ...state };
      productId = action.id;
      indexInCart = newState.products.findIndex(
        (element) => element.id === productId
      );
      newState.products[indexInCart].amount--;
      if (newState.products[indexInCart].amount === 0) {
        newState.products.splice(indexInCart, 1);
      }
      return newState;
    case CONFIRM_ORDER:
      newState = { ...state };
      newState.isCartConfirmed = !state.isCartConfirmed;
      return newState;
    case CLEAR_ORDER:
      newState = { ...state };
      newState.products = [];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
