import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingAddress: "",
  shippingAddress: "",
  creditCard: "",
  creditCardExp: "",
  creditCardCVV: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  shippingOption: "",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setBillingAddress: (state, action) => {
      state.billingAddress = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setCreditCard: (state, action) => {
      state.creditCard = action.payload;
    },
    setCreditCardExp: (state, action) => {
      state.creditCardExp = action.payload;
    },
    setCreditCardCVV: (state, action) => {
      state.creditCardCVV = action.payload;
    },
    setContactName: (state, action) => {
      state.contactName = action.payload;
    },
    setContactPhone: (state, action) => {
      state.contactPhone = action.payload;
    },
    setContactEmail: (state, action) => {
      state.contactEmail = action.payload;
    },
    setShippingOption: (state, action) => {
      state.shippingOption = action.payload;
    },
  },
});

export const {
  setShippingAddress,
  setBillingAddress,
  setCreditCard,
  setCreditCardExp,
  setCreditCardCVV,
  setContactName,
  setContactEmail,
  setContactPhone,
  setShippingOption,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
