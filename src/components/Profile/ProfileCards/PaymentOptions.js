import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentOptions = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <Card variant="outlined">
        <h3>Payment Options</h3>
        <p>Edit & Add Payment Options</p>
        <Link to="/paymentoptions">
          <Button>View</Button>
        </Link>
      </Card>
    </div>
  );
};

export default PaymentOptions;
