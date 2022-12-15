import React, { useState } from "react";
import { Card } from "@mui/material";

const BillingShipping = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleAddressTwoChange = (event) => {
    setAddressTwo(event.target.value);
  };
  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateProvinceChange = (event) => {
    setStateProvince(event.target.value);
  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Billing & Shipping Address</h4>
        <label>First Name:</label>
        <input
          required
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="John"
        ></input>
        <label>Last Name:</label>
        <input
          required
          type="text"
          value={lastName}
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
