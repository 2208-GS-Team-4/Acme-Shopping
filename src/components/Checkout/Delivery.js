import React from "react";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setShippingOption } from "../../store/checkoutSlice";
const Delivery = () => {
  const dispatch = useDispatch();
  const shippingOption = useSelector((state) => state.checkout.shippingOption);
  const handleCreditCard = (event) => {
    dispatch(setShippingOption(event.target.value));
  };
  return (
    <div>
      <Card variant="outlined">
        <h4>Delivery</h4>
        <label for="pet-select">Select Shipping Option:</label>
        <select
          name="shippingOptions"
          id="setShippingOptions"
          required
          onChange={handleCreditCard}
        >
          <option value="">---Please select an option----</option>
          <option value="slow">No Rush (9-10 Business Days)</option>
          <option value="normal">Standard (5-7 Business Days)</option>
          <option value="fast">Expedited (2 Business Days)</option>
          <option value="superfast">Overnight (Same Day Delivery)</option>
        </select>
      </Card>
    </div>
  );
};

export default Delivery;
