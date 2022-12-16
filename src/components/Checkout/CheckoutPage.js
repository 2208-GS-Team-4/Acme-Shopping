import React from "react";
import BillingShipping from "./BillingShipping";
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
//USE MUI TEXTIFELD FOR BOXES AT THE END

const CheckoutPage = () => {
  const everything = useSelector((state) => state.checkout);

  //post request everything
  const handleFormSubmit = () => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <ContactInfo />
      <BillingShipping />
      <Delivery />
      <Payment />
      <Button type="submit" variant="contained">Place Order</Button>
    </form>
  );
};

export default CheckoutPage;
