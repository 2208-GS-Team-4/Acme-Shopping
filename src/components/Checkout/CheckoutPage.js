
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
  const cartItem = useSelector((state) => state.cartProduct.cartProduct);
  const totalPrice = useSelector((state) => state.cartProduct.cartProduct);
  const cart = cartItem.allProducts;
  const total = cartItem.cart.total;
  console.log(total);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newOrderInfo = everything;

    await axios.post(`/api/users/${user.id}/order`, {
      cart,
      newOrderInfo,
      total,
    });

    await axios.put(`/api/users/${user.id}/`, {
      newOrderInfo,
      total,
    });

    setDisplay(!display);
    await axios.delete(`/api/users/${user.id}/cart/`);
    // await axios.put("/api/women", { cart });
    // await axios.put("/api/men", { cart });
  };
  return (
    <div>
      {" "}
      <p>Total:{total}</p>

      <form onSubmit={handleFormSubmit}>
        <ContactInfo />
        <BillingShipping />
        <Delivery />
        <Payment />


        <Button type="submit" variant="contained">
          Place Your Order
        </Button>
      </form>
      {display && (
        <h2>Thank you for your order, we will get back to you soon.</h2>
      )}
    </div>
  );
};

export default CheckoutPage;
