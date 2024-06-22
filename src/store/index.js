import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productsReducer from "./slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
