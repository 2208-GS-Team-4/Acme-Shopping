import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, TextField } from "@mui/material";
import {
  setShippingAddress,
  setBillingAddress,
  setCreditCard,
} from "../../store/userSlice";
import axios from "axios";

const PaymentOptionsForm = ({ display, handleDisplay }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const shippingAddress = user.shippingAddress;
  const billingAddress = user.billingAddress;
  const creditCard = user.creditCard;

  const handleShippingAddressChange = (event) => {
    dispatch(setShippingAddress(event.target.value));
  };
  const handleBillingAddressChange = (event) => {
    dispatch(setBillingAddress(event.target.value));
  };
  const handleCreditCardChange = (event) => {
    dispatch(setCreditCard(event.target.value));
  };
  const handleUserSubmit = async (event) => {
    event.preventDefault();
    handleDisplay();

    const updatedUserInfo = {
      firstName,
      lastName,
      shippingAddress,
      billingAddress,
      creditCard,
    };
    await axios.put(`/api/users/${user.id}`, updatedUserInfo);
    alert("User Info Changed!");
  };

  return (
    <div>
      <form onSubmit={handleUserSubmit}>
        <Card variant="outlined">
          <TextField
            id="standard-basic"
            label="Shipping Address"
            variant="standard"
            required
            type="text"
            value={user.shippingAddress}
            onChange={handleShippingAddressChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Billing Address"
            variant="standard"
            required
            type="text"
            value={user.billingAddress}
            onChange={handleBillingAddressChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Credit Card"
            variant="standard"
            required
            type="text"
            value={user.creditCard}
            onChange={handleCreditCardChange}
          ></TextField>
          <Button type="submit">Update</Button>
        </Card>
      </form>
    </div>
  );
};

export default PaymentOptionsForm;
