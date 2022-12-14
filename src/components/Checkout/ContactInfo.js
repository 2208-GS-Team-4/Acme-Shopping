import React, { useState } from "react";
import { Card } from "@mui/material";

const ContactInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      <Card variant="outlined">
        <h4>Contact Info</h4>
        <form>
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
        </form>
      </Card>
    </div>
  );
};

export default ContactInfo;
