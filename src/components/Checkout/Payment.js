import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setCreditCardNumber,
  setExpiration,
  setCode,
} from "../../store/checkoutSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const creditCardNumber = useSelector(
    (state) => state.checkout.creditCardNumber
  );
  const expiration = useSelector((state) => state.checkout.expiration);
  const code = useSelector((state) => state.checkout.code);

  const handleCreditCardNumberChange = (event) => {
    dispatch(setCreditCardNumber(event.target.value));
  };
  const handleExpirationChange = (event) => {
    dispatch(setExpiration(event.target.value));
  };
  const handleCodeChange = (event) => {
    dispatch(setCode(event.target.value));
  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Payment:</h4>
        <label>Credit Card:</label>
        <input
          required
          type="text"
          value={creditCardNumber}
          onChange={handleCreditCardNumberChange}
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
      </Card>
    </div>
  );
};

export default Payment;
