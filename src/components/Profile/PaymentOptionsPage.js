import React, { useState } from "react";
import { Card, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PaymentOptionsForm from "./PaymentOptionsForm";

const PaymentOptionsPage = () => {
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
    const creditCardNumber = String(user.creditCard);
    return (
      <Card variant="outlined" style={style}>
        <div style={{ margin: "30px auto 30px 30px" }}>
          <h2>Payment Options</h2>
          <h4>Shipping Address: {user.shippingAddress}</h4>
          <h4>Billing Address: {user.billingAddress}</h4>
          <h4>Credit Card: **** **** **** **{creditCardNumber.slice(-2)}</h4>
          {/* above just shows the last two digits/characters of credit card since its hashed*/}
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
      <PaymentOptionsForm display={display} handleDisplay={handleDisplay} />
    );
  };

  return <div>{display ? updateInfo() : currentInfo()}</div>;
};

export default PaymentOptionsPage;
