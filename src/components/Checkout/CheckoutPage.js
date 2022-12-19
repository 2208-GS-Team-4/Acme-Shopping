import React, { useState, useEffect } from "react";
import BillingShipping from "./BillingShipping";
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Payment from "./Payment";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";
//USE MUI TEXTIFELD FOR BOXES AT THE END

const CheckoutPage = () => {
  const [display, setDisplay] = useState(false);
  const everything = useSelector((state) => state.checkout);
  const { user } = useSelector((state) => state.user);
  const [orderTotal, setOrderTotal] = useState(0);
  const fetchCart = async () => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    setOrderTotal(response.data.cart.total);
  };
  useEffect(() => {
    fetchCart();
  }, []);
  //post request everything
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newOrder = everything;
    const total = orderTotal;
    console.log(total);
    const response = await axios.put(`/api/users/${user.id}/`, {
      newOrder,
      total,
    });

    setDisplay(!display);
    //
  };
  return (
    <div>
      {" "}
      <p>Total:{orderTotal}</p>
      <form onSubmit={handleFormSubmit}>
        <ContactInfo />
        <BillingShipping />
        <Delivery />
        <Payment />

        <Button type="submit" variant="contained">
          Place Your Order
        </Button>
      </form>
      {display && <h1>PLACE ORDER BUTTON WORKS</h1>}
    </div>
  );
};

export default CheckoutPage;
