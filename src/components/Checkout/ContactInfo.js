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
  const styleChoice = {
    margin: "10px auto 10px auto",
    color: "navy",
  };
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
    <Card variant="outlined" style={styleChoice}>
      <h4 style={{ margin: "20px auto 20px 20px" }}>Contact Info</h4>
      <label style={{ margin: "0px auto 30px 20px" }}>Recipient Name:</label>
      <input
        style={{ margin: "0px auto 30px 10px" }}
        required
        type="text"
        value={contactName}
        onChange={handleContactName}
        placeholder="John"
      ></input>
      <label style={{ margin: "0px auto 30px 20px" }}>Contact Phone:</label>
      <input
        style={{ margin: "0px auto 30px 10px" }}
        required
        type="text"
        value={contactPhone}
        onChange={handlePhoneNumber}
        placeholder="3333333333"
      ></input>
      <label style={{ margin: "0px auto 30px 20px" }}>Contact Email:</label>
      <input
        style={{ margin: "0px auto 30px 10px" }}
        required
        type="text"
        value={contactEmail}
        onChange={handleEmailChange}
        placeholder="johnsmith@johnsmith.com"
      ></input>
    </Card>
  );
};

export default ContactInfo;
