import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "@mui/material";
import {
  setFirstName,
  setLastName,
  setUsername,
  setPassword,
  setShippingAddress,
  setBillingAddress,
  setCreditCard,
  setPhone,
} from "../../store/userSlice";

const UpdateProfileForm = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>this is the update form temporarily</h1>
      <form>
        <Card variant="outlined">
          <label>First Name:</label>
          <input
            required
            type="text"
            value={user.firstName}
            onChange={setFirstName}
          ></input>
          <label>Last Name:</label>
          <input
            required
            type="text"
            value={user.lastName}
            onChange={setLastName}
          ></input>
          <label>Username:</label>
          <input
            required
            type="text"
            value={user.username}
            onChange={setUsername}
          ></input>
          <label>Password:</label>
          <input
            required
            type="text"
            value={user.password}
            onChange={setPassword}
          ></input>
          <label>Shipping Address:</label>
          <input
            required
            type="text"
            value={user.shippingAddress}
            onChange={setShippingAddress}
          ></input>
          <label>Billing Address:</label>
          <input
            required
            type="text"
            value={user.billingAddress}
            onChange={setBillingAddress}
          ></input>
          <label>Credit Card Info:</label>
          <input
            required
            type="text"
            value={user.creditCard}
            onChange={setCreditCard}
          ></input>
          <label>Phone Number:</label>
          <input
            required
            type="text"
            value={user.phone}
            onChange={setPhone}
          ></input>
        </Card>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
