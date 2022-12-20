import React, { useState } from "react";
import { Card, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import LoginSecurityForm from "./LoginSecurityForm";

const LoginSecurityPage = () => {
  const { user } = useSelector((state) => state.user);
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const currentInfo = () => {
    return (
      <div>
        <Card variant="outlined">
          <h2>Login & Security</h2>
          <h4>Username: {user.username}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Password: ******* </h4>
          <Button onClick={handleDisplay}>Edit</Button>
        </Card>
      </div>
    );
  };

  const updateInfo = () => {
    return <LoginSecurityForm display={display} handleDisplay={handleDisplay}/>;
  };

  return <div>{display ? updateInfo() : currentInfo()}</div>;
};

export default LoginSecurityPage;
