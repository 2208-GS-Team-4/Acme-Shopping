import React, { useState } from "react";
import BillingShipping from "./BillingShipping";
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
//USE MUI TEXTIFELD FOR BOXES AT THE END

const CheckoutPage = () => {
  const [display, setDisplay] = useState(false);
  const everything = useSelector((state) => state.checkout);

  //post request everything
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // api post request
    setDisplay(!display);
    //
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <ContactInfo />
        <BillingShipping />
        <Delivery />
        <Payment />
        <Button type="submit" variant="contained">
          Place Order
        </Button>
      </form>
      {display && <h1>PLACE ORDER BUTTON WORKS</h1>}
    </div>
  );
};

export default CheckoutPage;
