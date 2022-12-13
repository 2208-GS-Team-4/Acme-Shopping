import React, { useEffect } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllMenProducts from "./AllMenProducts";
import AllWomenProducts from "./AllWomenProducts";
import ProductCategoryMen from "./ProductCategoryMen";
import ProductCategoryWomen from "./ProductCategoryWomen";
import SingleMenProduct from "./SingleMenProduct";
import SingleWomenProduct from "./SingleWomenProduct";
import Login from "./Login";
import Register from "./Register";

import { setUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const RouterComponent = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      {!user.id && <Route path='/login' element={<Login />}/>}
      {!user.id && <Route path='/register' element={<Register />}/>}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/men" element={<AllMenProducts />} />
      <Route exact path="/men/:productType" element={<ProductCategoryMen />} />
      <Route exact path="/men/:productType/:id" element={<SingleMenProduct />}/>
      <Route exact path="/women" element={<AllWomenProducts />} />
      <Route exact path="/women/:productType" element={<ProductCategoryWomen />}/>
      <Route exact path="/women/:productType/:id" element={<SingleWomenProduct />}/>
    </Routes>
  );
};

export default RouterComponent;
