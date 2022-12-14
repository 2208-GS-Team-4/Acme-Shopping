import React, { useState } from "react";
import { Card } from "@mui/material";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [code, setCode] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };
  const handleExpirationChange = (event) => {
    setExpiration(event.target.value);
  };
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Payment:</h4>
        <form>
          <label>Credit Card:</label>
          <input
            required
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="0000-0000-0000-0000"
          ></input>
          <label>Expiration:</label>
          <input
            required
            type="text"
            value={expiration}
            onChange={handleExpirationChange}
            maxLength="5"
            placeholder="00/00"
          ></input>
          <label>CVV:</label>
          <input
            required
            type="text"
            value={code}
            onChange={handleCodeChange}
            maxLength="3"
            placeholder="000"
          ></input>
        </form>
      </Card>
    </div>
  );
};

export default Payment;
