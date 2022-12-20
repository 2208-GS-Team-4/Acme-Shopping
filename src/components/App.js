import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Navbar, RouterComponent } from "./";
import {
  setAllMensProducts,
  setAllWomensProducts,
} from "../store/productSlice";
import { setCart } from "../store/cartSlice";
import { resetUser } from "../store/userSlice";
const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // Here we make two API calls to get all Men's and Women's products when app first loads.
  // We then update the Redux store with those arrays
  const fetchProducts = async () => {
    const allMensProducts = await axios.get("/api/men");
    dispatch(setAllMensProducts(allMensProducts.data));
    const allWomensProducts = await axios.get("/api/women");
    dispatch(setAllWomensProducts(allWomensProducts.data));
  };

  useEffect(() => {
    fetchProducts();
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
