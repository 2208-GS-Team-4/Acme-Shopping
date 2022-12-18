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
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== tobeDeleted
      );
    },
  },
});

export const { setCart, setDeleteList } = cartSlice.actions;
export default cartSlice.reducer;
