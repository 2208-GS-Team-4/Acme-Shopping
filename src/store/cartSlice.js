import { SelectUnstyledContext } from "@mui/base";
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
    setDeleteList: (state, action) => {
      const tobeDeleted = action.payload;
      state.cartProduct = state.cartProduct.allProducts.filter(
        (item) => item.id !== tobeDeleted
      );
    },
    setTotal: (state, action) => {
      state.action = action.payload;
    },
  },
});

export const { setCart, setDeleteList, setTotal } = cartSlice.actions;
export default cartSlice.reducer;
