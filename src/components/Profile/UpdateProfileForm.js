import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "@mui/material";
import {
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setPassword,
  setShippingAddress,
  setBillingAddress,
  setCreditCard,
  setPhone,
} from "../../store/userSlice";
import axios from "axios";

const UpdateProfileForm = ({ handleDisplayForm }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const username = user.username;
  const password = user.password;
  const shippingAddress = user.shippingAddress;
  const billingAddress = user.billingAddress;
  const creditCard = user.creditCard;
  const phone = user.phone;

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  };
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
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
  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };
  const handleUserSubmit = async (event) => {
    event.preventDefault();
    handleDisplayForm();

    const updatedUserInfo = {
      firstName,
      lastName,
      username,
      email,
      password,
      shippingAddress,
      billingAddress,
      creditCard,
      phone,
    };
    await axios.put(`/api/users/${user.id}`, updatedUserInfo);
    alert("User Info Changed!");
  };

  return (
    <div>
      <h1>this is the update form temporarily</h1>
      {console.log(user)}
      <form onSubmit={handleUserSubmit}>
        <Card variant="outlined">
          <label>First Name:</label>
          <input
            required
            type="text"
            value={user.firstName}
            onChange={handleFirstNameChange}
          ></input>
          <label>Last Name:</label>
          <input
            required
            type="text"
            value={user.lastName}
            onChange={handleLastNameChange}
          ></input>
          <label>Email:</label>
          <input
            required
            type="text"
            value={user.email}
            onChange={handleEmailChange}
          ></input>
          <label>Username:</label>
          <input
            required
            type="text"
            value={user.username}
            onChange={handleUsernameChange}
          ></input>
          <label>Password:</label>
          <input
            required
            type="text"
            value={user.password}
            onChange={handlePasswordChange}
          ></input>
          <label>Shipping Address:</label>
          <input
            required
            type="text"
            value={user.shippingAddress}
            onChange={handleShippingAddressChange}
          ></input>
          <label>Billing Address:</label>
          <input
            required
            type="text"
            value={user.billingAddress}
            onChange={handleBillingAddressChange}
          ></input>
          <label>Credit Card Info:</label>
          <input
            required
            type="text"
            value={user.creditCard}
            onChange={handleCreditCardChange}
          ></input>
          <label>Phone Number:</label>
          <input
            required
            type="text"
            value={user.phone}
            onChange={handlePhoneChange}
          ></input>
          <Button type="submit">Update User Info</Button>
        </Card>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
