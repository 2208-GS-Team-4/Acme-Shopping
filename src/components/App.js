import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {RouterComponent} from "./";
import { setAllMensProducts,setAllWomensProducts } from "../store/productSlice";

const App = () => {
  const dispatch = useDispatch();

  // Here we make two API calls to get all Men's and Women's products when app first loads.
  // We then update the Redux store with those arrays
  const fetchProducts = async() => {
    const allMensProducts = await axios.get('/api/men');
    dispatch(setAllMensProducts(allMensProducts.data));
    const allWomensProducts = await axios.get('/api/women');
    dispatch(setAllWomensProducts(allWomensProducts.data));
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <Link to="/">
        <h1>STORE LOGO GOES HERE</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
      </nav>
      <p>LOGIN COMP GOES HERE</p>
      <RouterComponent />
    </div>
  );
};

export default App;
