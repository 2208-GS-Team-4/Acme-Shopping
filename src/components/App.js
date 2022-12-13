import React, { useEffect } from "react";
import Login from "./Login";
import { setUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import RouterComponent from "./RouterComponent";

const App = () => {
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

      <RouterComponent />
    </div>
  );
};

export default App;
