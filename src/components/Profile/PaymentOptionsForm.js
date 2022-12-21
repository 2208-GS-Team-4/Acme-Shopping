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
  const style = {
    margin: "130px auto",
    width: "70%",
    color: "navy",
    display: "block",
  };
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
    <form onSubmit={handleUserSubmit}>
      <Card variant="outlined" style={style}>
        <div style={{ margin: "30px auto 30px 30px" }}>
          <TextField
            id="standard-basic"
            label="Shipping Address"
            variant="standard"
            required
            type="text"
            value={user.shippingAddress}
            onChange={handleShippingAddressChange}
            style={{ marginRight: "30px" }}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Billing Address"
            variant="standard"
            required
            type="text"
            value={user.billingAddress}
            onChange={handleBillingAddressChange}
            style={{ marginRight: "30px" }}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Credit Card"
            variant="standard"
            required
            type="text"
            value={user.creditCard}
            onChange={handleCreditCardChange}
            style={{ marginRight: "30px" }}
          ></TextField>
          <Button
            type="submit"
            style={{
              margin: "20px 0 0 20px",
              backgroundColor: "navy",
              color: "yellow",
              fontSize: "12px",
              height: "30px",
            }}
          >
            Update
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default PaymentOptionsForm;
