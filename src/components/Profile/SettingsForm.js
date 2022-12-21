import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, TextField, Alert } from "@mui/material";
import {
  setFirstName,
  setLastName,
  setShippingAddress,
  setPhone,
} from "../../store/userSlice";
import axios from "axios";
const style = {
  margin: "130px auto",
  width: "70%",
  color: "navy",
  display: "block",
};
const SettingsForm = ({ display, handleDisplay }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const shippingAddress = user.shippingAddress;
  const phone = user.phone;

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  };
  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };
  const handleShippingAddressChange = (event) => {
    dispatch(setShippingAddress(event.target.value));
  };
  const handleUserSubmit = async (event) => {
    event.preventDefault();
    handleDisplay();

    const updatedUserInfo = {
      firstName,
      lastName,
      shippingAddress,
      phone,
    };
    await axios.put(`/api/users/${user.id}`, updatedUserInfo);
    alert("Settings Changed!");
  };

  return (
    <form onSubmit={handleUserSubmit}>
      <Card variant="outlined" style={style}>
        <div style={{ margin: "30px auto 30px 30px" }}>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            required
            type="text"
            value={user.firstName}
            onChange={handleFirstNameChange}
            style={{ marginRight: "30px" }}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            required
            type="text"
            value={user.lastName}
            onChange={handleLastNameChange}
            style={{ marginRight: "30px" }}
          ></TextField>
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
            label="Phone Number"
            variant="standard"
            required
            type="text"
            value={user.phone}
            onChange={handlePhoneChange}
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

export default SettingsForm;
