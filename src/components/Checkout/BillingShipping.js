import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {

  setBillingAddress,
  setShippingAddress,

} from "../../store/checkoutSlice";

const BillingShipping = () => {
  const dispatch = useDispatch();

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
      <Card variant="outlined">

        <h4>Shipping & Billing</h4>
        <label>Ship to:</label>
=======
 
        <input
          required
          type="text"
          value={shippingAddress}
          onChange={handleShippingAddress}
          placeholder=" 123th street apt1, American City, American State, USA, 10000"
        ></input>

        <label>Bill to:</label>
        <input
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
