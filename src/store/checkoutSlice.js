import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  billingFirstName: "",
  billingLastName: "",
  country: "",
  address: "",
  addressTwo: "",
  postalCode: "",
  city: "",
  stateProvince: "",
  creditCardNumber: "",
  expiration: "",
  code: "",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setBillingFirstName: (state, action) => {
      state.billingFirstName = action.payload;
    },
    setBillingLastName: (state, action) => {
      state.billingLastName = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddressTwo: (state, action) => {
      state.addressTwo = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setStateProvince: (state, action) => {
      state.stateProvince = action.payload;
    },
    setCreditCardNumber: (state, action) => {
      state.creditCardNumber = action.payload;
    },
    setExpiration: (state, action) => {
      state.expiration = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setBillingFirstName,
  setBillingLastName,
  setCountry,
  setAddress,
  setAddressTwo,
  setPostalCode,
  setCity,
  setStateProvince,
  setCreditCardNumber,
  setExpiration,
  setCode,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
