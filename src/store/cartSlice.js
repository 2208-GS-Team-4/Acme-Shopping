import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: {},
};

export const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartProduct = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
