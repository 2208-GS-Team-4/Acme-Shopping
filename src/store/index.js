import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import checkoutReducer from "./checkoutSlice";

import cartProductReducer from "./cartSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    checkout: checkoutReducer,

    cartProduct: cartProductReducer,

  },
});

export default store;
