import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const YourOrders = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <Card variant="outlined">
        <h3>Your Orders</h3>
        <p>View information about your orders here</p>
        <Link to="/orderhistory">
          <Button>View</Button>
        </Link>
      </Card>
    </div>
  );
};

export default YourOrders;
