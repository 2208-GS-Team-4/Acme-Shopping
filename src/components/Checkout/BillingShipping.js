import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setBillingFirstName,
  setBillingLastName,
  setCountry,
  setAddress,
  setAddressTwo,
  setPostalCode,
  setCity,
  setStateProvince,
} from "../../store/CheckoutSlice";

const BillingShipping = () => {
  const dispatch = useDispatch();
  const billingFirstName = useSelector(
    (state) => state.checkout.billingFirstName
  );
  const billingLastName = useSelector(
    (state) => state.checkout.billingLastName
  );
  const country = useSelector((state) => state.checkout.country);
  const address = useSelector((state) => state.checkout.address);
  const addressTwo = useSelector((state) => state.checkout.addressTwo);
  const postalCode = useSelector((state) => state.checkout.postalCode);
  const city = useSelector((state) => state.checkout.city);
  const stateProvince = useSelector((state) => state.checkout.stateProvince);

  const handleFirstNameChange = (event) => {
    dispatch(setBillingFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(setBillingLastName(event.target.value));
  };
  const handleCountryChange = (event) => {
    dispatch(setCountry(event.target.value));
  };
  const handleAddressChange = (event) => {
    dispatch(setAddress(event.target.value));
  };
  const handleAddressTwoChange = (event) => {
    dispatch(setAddressTwo(event.target.value));
  };
  const handlePostalCodeChange = (event) => {
    dispatch(setPostalCode(event.target.value));
  };
  const handleCityChange = (event) => {
    dispatch(setCity(event.target.value));
  };
  const handleStateProvinceChange = (event) => {
    dispatch(setStateProvince(event.target.value));
  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Billing & Shipping Address</h4>
        <label>First Name:</label>
        <input
          required
          type="text"
          value={billingFirstName}
          onChange={handleFirstNameChange}
          placeholder="John"
        ></input>
        <label>Last Name:</label>
        <input
          required
          type="text"
          value={billingLastName}
          onChange={handleLastNameChange}
          placeholder="Smith"
        ></input>
        <label>Country:</label>
        <input
          required
          type="text"
          value={country}
          onChange={handleCountryChange}
          placeholder="United States of John Smith"
        ></input>
        <label>Address:</label>
        <input
          required
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="123 John St"
        ></input>
        <label>Address Two:</label>
        <input
          type="text"
          value={addressTwo}
          onChange={handleAddressTwoChange}
          placeholder="Apartment 123"
        ></input>
        <label>Postal Code:</label>
        <input
          required
          type="text"
          value={postalCode}
          onChange={handlePostalCodeChange}
          placeholder="00000"
        ></input>
        <label>City:</label>
        <input
          required
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="John Smith City"
        ></input>
        <label>State / Province:</label>
        <input
          required
          type="text"
          value={stateProvince}
          onChange={handleStateProvinceChange}
          placeholder="John Smith York?"
        ></input>
      </Card>
    </div>
  );
};

export default BillingShipping;
