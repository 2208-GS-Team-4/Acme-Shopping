import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const [cartProducts,setCartProducts] = useState([]);

  const fetchCartProducts = async() => {
    const cartProducts = await axios.get(`/api/users/${user.id}/cart`);
    setCartProducts(cartProducts.data);
  };

  useEffect(()=>{
    fetchCartProducts();
  },[]);

  console.log(cartProducts);

  return (
    <div>
      <h1>User cart</h1>
    </div>
  );
};

export default Cart;