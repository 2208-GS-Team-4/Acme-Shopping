import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import checkoutReducer from "./checkoutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    checkout: checkoutReducer,
  },
});

export default store;
