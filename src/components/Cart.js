import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DeleteFromCart from "./DeleteCartItem";
import setCart from "../store/cartSlice";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cartProduct.cartProduct);
  const dispatch = useDispatch();
  const fetchCart = async () => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    console.log(response);
    dispatch(setCart(response.data));
  };
  useEffect(() => {
    fetchCart();
  }, []);
  const checkOut = async (event) => {
    // event.preventDefault();
    // const newOrder = { cart };
    // //orderRoute
    // const response = await axios.post("/api/orderRoute", newOrder);
  };
  return (
    <div>
      <h1>Cart</h1>
      <form onSubmit={checkOut} className="cartForm">
        <ul className="cartItem">
          {cart.map((product) => {
            const handlePlus = (event) => {
              event.preventDefault();
              document.getElementById(product.id).innerHTML =
                product.quantity += 1;
            };
            const handleMinus = (event) => {
              event.preventDefault();
              document.getElementById(product.id).innerHTML =
                product.quantity -= 1;
            };

            return (
              <li key={product.id}>
                <img src={product.imageURL} />
                <p> {product.name}</p>
                <p>{product.size}</p>
                <button onClick={handlePlus} className="itemButton">
                  +
                </button>{" "}
                <p id={product.id} className="quantity">
                  {product.quantity}{" "}
                </p>
                <button onClick={handleMinus} className="itemButton">
                  -
                </button>
                <DeleteFromCart product={product} />
              </li>
            );
          })}{" "}
        </ul>{" "}
        <button className="submit">Check out</button>
      </form>
    </div>
  );
};

export default Cart;
