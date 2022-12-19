import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setContactName,
  setContactEmail,
  setContactPhone,
} from "../../store/checkoutSlice";

const ContactInfo = () => {
  const dispatch = useDispatch();
  const contactEmail = useSelector((state) => state.checkout.contactEmail);
  const contactName = useSelector((state) => state.checkout.contactName);
  const contactPhone = useSelector((state) => state.checkout.contactPhone);

  const handleContactName = (event) => {
    dispatch(setContactName(event.target.value));
  };
  const handleEmailChange = (event) => {
    dispatch(setContactEmail(event.target.value));
  };
  const handlePhoneNumber = (event) => {
    dispatch(setContactPhone(event.target.value));
  };

  return (
    <div>
      <Card variant="outlined">
        <h4>Contact Info</h4>
        <label>Recipient Name:</label>
        <input
          required
          type="text"
          value={contactName}
          onChange={handleContactName}
          placeholder="John"
        ></input>
        <label>Contact Phone:</label>
        <input
          required
          type="text"
          value={contactPhone}
          onChange={handlePhoneNumber}
          placeholder="3333333333"
        ></input>
        <label>Contact Email:</label>
        <input
          required
          type="text"
          value={contactEmail}
          onChange={handleEmailChange}
          placeholder="johnsmith@johnsmith.com"
        ></input>
      </Card>
    </div>
  );
};

export default ContactInfo;
