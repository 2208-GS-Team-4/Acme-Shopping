import React, { useState } from "react";
import { Card, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import LoginSecurityForm from "./LoginSecurityForm";

const LoginSecurityPage = () => {
  const { user } = useSelector((state) => state.user);
  const [display, setDisplay] = useState(false);
  const style = {
    margin: "130px auto",
    width: "70%",
    color: "navy",
    display: "block",
  };
  const handleDisplay = () => {
    setDisplay(!display);
  };

  const currentInfo = () => {
    return (
      <Card variant="outlined" style={style}>
        <div style={{ margin: "30px auto 30px 30px" }}>
          <h2>Login & Security</h2>
          <h4>Username: {user.username}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Password: ******* </h4>
          <Button
            onClick={handleDisplay}
            style={{
              margin: "0 0 0 0",
              backgroundColor: "navy",
              color: "yellow",
            }}
          >
            Edit
          </Button>
        </div>
      </Card>
    );
  };

  const updateInfo = () => {
    return (
      <LoginSecurityForm display={display} handleDisplay={handleDisplay} />
    );
  };

  return <div>{display ? updateInfo() : currentInfo()}</div>;
};

export default LoginSecurityPage;
