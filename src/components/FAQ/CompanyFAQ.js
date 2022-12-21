import React from "react";
import { Card } from "@mui/material";

const Company = () => {
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
        <h3>Company</h3>
        <p>About Us</p>
        <p>Our Values</p>
        <p>Careers with Us</p>
        <p>Affiliate Program</p>
        <p>Terms & Conditions</p>
        <p>Submit Your Ideas</p>
      </div>
    </Card>
  );
};

export default Company;
