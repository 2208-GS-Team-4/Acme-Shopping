import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setBillingAddress,
  setShippingAddress,
} from "../../store/checkoutSlice";

const BillingShipping = () => {
  const dispatch = useDispatch();
  const styleChoice = {
    margin: "10px auto 10px auto",
    color: "navy",
  };
  const billingAddress = useSelector((state) => state.checkout.billingAddress);
  const shippingAddress = useSelector(
    (state) => state.checkout.shippingAddress
  );

  const handleBillingAddress = (event) => {
    dispatch(setBillingAddress(event.target.value));
  };
  const handleShippingAddress = (event) => {
    dispatch(setShippingAddress(event.target.value));
  };

  return (
    <div>
      <Card variant="outlined" style={styleChoice}>
        <h4 style={{ margin: "20px auto 20px 20px" }}>Shipping & Billing</h4>
        <label style={{ margin: "0px auto 30px 20px" }}>Ship to:</label>
        <input
          style={{ margin: "0px auto 30px 10px" }}
          required
          type="text"
          value={shippingAddress}
          onChange={handleShippingAddress}
          placeholder=" 123th street apt1, American City, American State, USA, 10000"
        ></input>

        <label style={{ margin: "0px auto 30px 20px" }}>Bill to:</label>
        <input
          style={{ margin: "0px auto 30px 10px" }}
          required
          type="text"
          value={billingAddress}
          onChange={handleBillingAddress}
          placeholder="123th street apt1, American City, American State, USA, 10000"
        ></input>
      </Card>
    </div>
  );
};

export default BillingShipping;
