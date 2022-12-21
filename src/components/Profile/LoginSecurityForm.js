import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, TextField } from "@mui/material";
import { setEmail, setUsername, setPassword } from "../../store/userSlice";
import axios from "axios";

const LoginSecurityForm = ({ display, handleDisplay }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const email = user.email;
  const username = user.username;
  const password = user.password;
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };
  const handleUserSubmit = async (event) => {
    event.preventDefault();
    handleDisplay();

    const updatedUserInfo = {
      username,
      email,
      password,
    };
    await axios.put(`/api/users/${user.id}`, updatedUserInfo);
    alert("User Info Changed!");
  };
  const style = {
    margin: "130px auto",
    width: "70%",
    color: "navy",
    display: "block",
  };
  return (
    <form onSubmit={handleUserSubmit}>
      <Card variant="outlined" style={style}>
        <div style={{ margin: "30px auto 30px 30px" }}>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            required
            type="text"
            value={user.username}
            onChange={handleUsernameChange}
            style={{ marginRight: "30px" }}
          ></TextField>
          <TextField
            style={{ marginRight: "30px" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            required
            type="text"
            value={user.email}
            onChange={handleEmailChange}
          ></TextField>
          <TextField
            style={{ marginRight: "30px" }}
            id="standard-basic"
            label="Password"
            variant="standard"
            required
            type="text"
            value={user.password}
            onChange={handlePasswordChange}
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

export default LoginSecurityForm;
