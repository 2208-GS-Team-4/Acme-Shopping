import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state, action) => {
      state.user = {};
    },
    setFirstName: (state, action) => {
      state.user.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.user.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setUsername: (state, action) => {
      state.user.username = action.payload;
    },
    setPassword: (state, action) => {
      state.user.password = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.user.ShippingAddress = action.payload;
    },
    setBillingAddress: (state, action) => {
      state.user.billingAddress = action.payload;
    },
    setCreditCard: (state, action) => {
      state.user.creditCard = action.payload;
    },
    setPhone: (state, action) => {
      state.user.phone = action.payload;
    },
  },
});

export const {
  setUser,
  resetUser,
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setPassword,
  setShippingAddress,
  setBillingAddress,
  setCreditCard,
  setPhone,
} = userSlice.actions;
export default userSlice.reducer;
