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
  const styleChoice = {
    margin: "10px auto 10px auto",
    color: "navy",
  };
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
      <Card variant="outlined" style={styleChoice}>
        <h4 style={{ margin: "20px auto 20px 20px" }}>Payment Information:</h4>
        <label style={{ margin: "0px auto 30px 20px" }}>
          Credit Card Number:
        </label>
        <input
          style={{ margin: "0px auto 30px 10px" }}
          required
          type="text"
          value={creditCard}
          onChange={handleCreditCard}
          placeholder="0000-0000-0000-0000"
        ></input>
        <label style={{ margin: "0px auto 30px 20px" }}>Expiration:</label>
        <input
          style={{ margin: "0px auto 30px 10px" }}
          required
          type="text"
          value={creditCardExp}
          onChange={handleCreditCardExp}
          maxLength="5"
          placeholder="00/00"
        ></input>
        <label style={{ margin: "0px auto 30px 20px" }}>CVV:</label>
        <input
          style={{ margin: "0px auto 30px 10px" }}
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
