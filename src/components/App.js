import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {Navbar,RouterComponent} from "./";
import { setAllMensProducts,setAllWomensProducts } from "../store/productSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchProducts = async() => {
    const allMensProducts = await axios.get('/api/men');
    dispatch(setAllMensProducts(allMensProducts.data));
    const allWomensProducts = await axios.get('/api/men');
    dispatch(setAllWomensProducts(allWomensProducts.data));
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <Navbar />
      <RouterComponent />
    </div>
  );
};

export default App;
