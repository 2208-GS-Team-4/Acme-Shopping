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
  const styleChoice = {
    margin: "10px auto 10px auto",
    color: "navy",
  };
  return (
    <div>
      <Card variant="outlined" style={styleChoice}>
        <h4 style={{ margin: "20px auto 20px 20px" }}>Delivery</h4>
        <label for="pet-select" style={{ margin: "0px auto 30px 20px" }}>
          Select Shipping Option:
        </label>
        <select
          style={{ margin: "0px auto 20px 20px" }}
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
