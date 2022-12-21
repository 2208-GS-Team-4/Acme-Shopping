import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentOptions = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Card variant="outlined" style={{ marginTop: "10px" }}>
      <div
        style={{
          color: "navy",
          padding: "10px 20px",
        }}
      >
        <h3>Payment Options</h3>
        <p>
          Edit & Add Payment Options{" "}
          <Link
            to="/paymentoptions"
            style={{
              textWeight: "bold",
              textDecoration: "underline",
            }}
          >
            here
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default PaymentOptions;
