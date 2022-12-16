import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AllMenProducts,
  AllWomenProducts,
  Home,
  Login,
  ProductCategoryMen,
  ProductCategoryWomen,
  Register,
  SideMenuMen,
  SideMenuWomen,
  SingleMenProduct,
  SingleWomenProduct,
  Cart,
} from "./";
import CheckoutPage from "./Checkout/CheckoutPage";

const RouterComponent = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/men" element={<AllMenProducts />} />
      <Route exact path="/men/:productType" element={<ProductCategoryMen />} />
      <Route exact path="/men/:productType/:id" element={<SingleMenProduct />}/>
      <Route exact path="/women" element={<AllWomenProducts />} />
      <Route exact path="/women/:productType" element={<ProductCategoryWomen />}/>
      <Route exact path="/women/:productType/:id" element={<SingleWomenProduct />}/>
      <Route exact path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default RouterComponent;
