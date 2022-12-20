import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {

  setCreditCard,
  setCreditCardExp,
  setCreditCardCVV,

} from "../../store/checkoutSlice";

const Payment = () => {
  const dispatch = useDispatch();

  const creditCard = useSelector((state) => state.checkout.creditCard);
  const creditCardExp = useSelector((state) => state.checkout.creditCardExp);
  const creditCardCVV = useSelector((state) => state.checkout.creditCardCVV);
  const handleCreditCard = (event) => {
    dispatch(setCreditCard(event.target.value));
  };
  const handleCreditCardExp = (event) => {
    dispatch(setCreditCardExp(event.target.value));
  };
  const handleCreditCardCVV = (event) => {
    dispatch(setCreditCardCVV(event.target.value));

  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Payment Information:</h4>
        <label>Credit Card Number:</label>
        <input
          required
          type="text"

          value={creditCard}
          onChange={handleCreditCard}

          placeholder="0000-0000-0000-0000"
        ></input>
        <label>Expiration:</label>
        <input
          required
          type="text"
          value={creditCardExp}
          onChange={handleCreditCardExp}
          maxLength="5"
          placeholder="00/00"
        ></input>
        <label>CVV:</label>
        <input
          required
          type="text"
          value={creditCardCVV}
          onChange={handleCreditCardCVV}
          maxLength="3"
          placeholder="000"
        ></input>
      </Card>
    </div>
  );
};

export default Payment;
