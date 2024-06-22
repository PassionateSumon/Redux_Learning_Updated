import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productsReducer from "./slices/productsSlice";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
})

export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());
