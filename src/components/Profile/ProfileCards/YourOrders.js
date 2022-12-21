import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const YourOrders = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Card variant="outlined">
      <div
        style={{
          color: "navy",
          padding: "10px 20px",
        }}
      >
        <h3>Orders History</h3>
        <p>
          View information about your orders{" "}
          <Link
            to="/orderhistory"
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

export default YourOrders;
