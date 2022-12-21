import React, { useState } from "react";
import { Card, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import SettingsForm from "./SettingsForm";

const SettingsPage = () => {
  const { user } = useSelector((state) => state.user);
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const getRandomInt = (limit) => {
    return Math.floor(Math.random() * limit);
  };

  const currentInfo = () => {
    return (
      <div>
        <Card variant="outlined">
          <h2>
            Name: {user.firstName}, {user.lastName}
          </h2>
          <h4>Reward Points: {getRandomInt(2500)}</h4>
          <h4>Address: {user.shippingAddress}</h4>
          <h4>Phone Number: {user.phone}</h4>
          <h4></h4>
          <Button onClick={handleDisplay}>Edit</Button>
        </Card>
      </div>
    );
  };

  const updateInfo = () => {
    return <SettingsForm display={display} handleDisplay={handleDisplay} />;
  };

  return <div>{display ? updateInfo() : currentInfo()}</div>;
};

export default SettingsPage;
