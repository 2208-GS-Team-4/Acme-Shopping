import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
} from "../../store/checkoutSlice";

const ContactInfo = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.checkout.firstName);
  const lastName = useSelector((state) => state.checkout.lastName);
  const email = useSelector((state) => state.checkout.email);
  const phoneNumber = useSelector((state) => state.checkout.phoneNumber);

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  };
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handlePhoneNumberChange = (event) => {
    dispatch(setPhoneNumber(event.target.value));
  };

  return (
    <div>
      <Card variant="outlined">
        <h4>Contact Info</h4>
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
        <label>Email:</label>
        <input
          required
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="johnsmith@johnsmith.com"
        ></input>
        <label>Phone Number:</label>
        <input
          required
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="123-456-7890"
        ></input>
      </Card>
    </div>
  );
};

export default ContactInfo;
