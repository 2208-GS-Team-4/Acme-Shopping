import React from "react";
import { Card } from "@mui/material";

const OurBrands = () => {
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
        <h3 style={{ textDecoration: "underline" }}>Our Brands</h3>
        <p>Hats by Heidi©</p>
        <h4>Jackets by Jack®</h4>
        <h4>Yogurts by YiFan™</h4>
        <h4>Balloons by Ben®</h4>
        <h4>Laptops by Louis©</h4>
      </div>
    </Card>
  );
};

export default OurBrands;
