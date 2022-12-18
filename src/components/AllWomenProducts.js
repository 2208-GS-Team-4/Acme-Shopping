import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setCart } from "../store/cartSlice";
import { SideMenuWomen } from "./";
import { useSelector, useDispatch } from "react-redux";
const AllWomenProducts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allWomensProducts } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cartProduct.cartProduct);
  const fetchCart = async () => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    dispatch(setCart(response.data));
  };
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div>
      <SideMenuWomen />
      <div className="grid-container">
        {allWomensProducts.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <Link to={`/women/${product.type}/${product.id}`}>
                <img src={product.imageURL} />
                <p className="productDisplayName">{product.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllWomenProducts;
