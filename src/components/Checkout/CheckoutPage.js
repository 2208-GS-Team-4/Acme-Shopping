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
  // const fetchCart = async () => {
  //   const response = await axios.get(`/api/users/${user.id}/cart`);
  //   setOrderTotal(response.data.cart.total);
  // };
  // useEffect(() => {
  //   fetchCart();
  // }, []);
  //post request everything
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newOrder = everything;
    // const total = orderTotal;

    const response = await axios.put(`/api/users/${user.id}/`, {
      newOrder,
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
