import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AllMenProducts,
  AllWomenProducts,
  Home,
  Login,
  ProductCategoryMen,
  ProductCategoryWomen,
  Register,
  SingleMenProduct,
  SingleWomenProduct,
  Cart,
  Admin,
  AdminAddProduct,
  AdminEditProduct,
  AdminViewUsers,
  CheckoutPage,
} from "./";

import OrderHistory from "./OrderHistory";
import ProfilePage from "./Profile/ProfilePage";
import LoginSecurityPage from "./Profile/LoginSecurityPage";
import PaymentOptionsPage from "./Profile/PaymentOptionsPage";
import SettingsPage from "./Profile/SettingsPage";

const RouterComponent = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/admin/add-product" element={<AdminAddProduct />} />
      <Route
        exact
        path="/admin/edit-product/:id"
        element={<AdminEditProduct />}
      />
      <Route exact path="/admin/view-users" element={<AdminViewUsers />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/men" element={<AllMenProducts />} />
      <Route exact path="/men/:productType" element={<ProductCategoryMen />} />
      <Route
        exact
        path="/men/:productType/:id"
        element={<SingleMenProduct />}
      />
      <Route exact path="/women" element={<AllWomenProducts />} />
      <Route
        exact
        path="/women/:productType"
        element={<ProductCategoryWomen />}
      />
      <Route
        exact
        path="/women/:productType/:id"
        element={<SingleWomenProduct />}
      />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      <Route exact path="/orderhistory" element={<OrderHistory />} />

      <Route
        exact
        path="/women/:productType"
        element={<ProductCategoryWomen />}
      />
      <Route
        exact
        path="/women/:productType/:id"
        element={<SingleWomenProduct />}
      />

      {/* <Route exact path="/profile" element={<UserProfile />} /> */}
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/loginsecurity" element={<LoginSecurityPage />} />
      <Route exact path="/paymentoptions" element={<PaymentOptionsPage />} />
      <Route exact path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default RouterComponent;
