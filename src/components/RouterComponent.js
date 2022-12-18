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
  Admin,
  AdminAddProduct,
  AdminEditProduct,
  CheckoutPage
} from './';

const RouterComponent = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/admin/add-product" element={<AdminAddProduct />} />
      <Route exact path="/admin/edit-product/:id" element={<AdminEditProduct />} />
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