import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Navbar, RouterComponent } from "./";
import { setUser } from "../store/userSlice";
import {
  setAllProducts,
  setAllMensProducts,
  setAllWomensProducts,
} from "../store/productSlice";
import { setCart } from "../store/cartSlice";
import { resetUser } from "../store/userSlice";
import FAQMain from "./FAQ/MainFAQ";
import { create } from "@mui/material/styles/createTransitions";
const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // Here we make two API calls to get all Men's and Women's products when app first loads.
  // We then update the Redux store with those arrays
  const fetchProducts = async () => {
    const allProducts = await axios.get("/api/products");
    dispatch(setAllProducts(allProducts.data));
    const allMensProducts = await axios.get("/api/men");
    dispatch(setAllMensProducts(allMensProducts.data));
    const allWomensProducts = await axios.get("/api/women");
    dispatch(setAllWomensProducts(allWomensProducts.data));
  };

  // Here we are checking to see if a user is already logged in upon refresh
  // If a token is present in local storage, we keep the user logged in
  const checkForUser = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
    }
  };

  const createGuestCart = () =>{
    if(!user.id){
      const guestCart = [];
      window.localStorage.setItem('guestCart', JSON.stringify(guestCart));
    };
  };

  useEffect(() => {
    fetchProducts();
    checkForUser();
    createGuestCart();
  }, []);

  useEffect(() => {
    if (user.id) {
      const fetchCart = async () => {
        const cartItems = await axios.get(`/api/users/${user.id}/cart`);
        dispatch(setCart(cartItems.data));
      };
      fetchCart(), [];
    }
  });

  return (
    <div>
      <Navbar />
      <RouterComponent />
    </div>
  );
};

export default App;
