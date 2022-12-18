import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteList, setCart } from "../store/cartSlice";
import axios from "axios";

const DeleteFromCart = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      dispatch(setDeleteList(product.id));
      await axios.delete(`/api/users/${user.id}/cart/${product.id}`);
      const response = await axios.get(`/api/users/${user.id}/cart`);
      dispatch(setCart(response.data));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};
export default DeleteFromCart;
