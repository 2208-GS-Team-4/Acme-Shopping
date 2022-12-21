import React from "react";
import { Card } from "@mui/material";

const Support = () => {
  const styleChoice = {
    fontSize: "12px",
    color: "navy",
    padding: "0 20px",
    height: "fit-content",
    lineHeight: "14px",
  };
  return (
    <Card variant="none">
      <div style={styleChoice}>
        <h3>Support</h3>
        <p>Customer Service</p>
        <p>Returns and Exchanges</p>
        <p>Feedback</p>
        <p>Contact Us</p>
        <p>Shipping</p>
        <p>Track Order</p>
        <p>Gift Cards</p>
        <p>Accessibility</p>
      </div>
    </Card>
  );
};

export default Support;
