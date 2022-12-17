import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartProductReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cartProduct: cartProductReducer,
  },
});

export default store;
