import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../store/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };
  
  return (
    <div>
      <Link to="/" id="brandName">
        ACME
      </Link>
      <div id="navBar">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/checkout">Temp Checkout</Link>
        <Link to="/profile">Temp ProfileChange</Link>
      </div>
      <div className="loggedInDiv">
        {user.id ? (
          <p>Welcome {user.username}!!</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {user.id && <Link to="/cart">Cart</Link>}
        {user.id && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
