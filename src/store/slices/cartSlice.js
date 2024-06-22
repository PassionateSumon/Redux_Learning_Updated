import { produce } from "immer";

// Action Types
const CART_ADD_ITEMS = "cart/addItem";
const CART_DELETE_ITEMS = "cart/deleteItem";
const CART_INC_QUANTITY = "cart/increaseQuant";
const CART_DEC_QUANTITY = "cart/decreaseQuant";

// Action creators
export function addCartItem(productDetails) {
  return {
    type: CART_ADD_ITEMS,
    payload: productDetails,
  };
}
export function removeCartItem(productId) {
  return { type: CART_DELETE_ITEMS, payload: { productId } };
}
export function cartIncreaseQuantity(productId) {
  return { type: CART_INC_QUANTITY, payload: { productId } };
}
export function cartDecreaseQuantity(productId) {
  return { type: CART_DEC_QUANTITY, payload: { productId } };
}

// Reducer
export default function cartReducer(origialState = [], action) {
  return produce(origialState, (state) => {
    const existingItemIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEMS:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_DELETE_ITEMS:
        state.splice(existingItemIndex, 1);
        break;
      case CART_INC_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;
      case CART_DEC_QUANTITY:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
    }
    return state;
  });
}
