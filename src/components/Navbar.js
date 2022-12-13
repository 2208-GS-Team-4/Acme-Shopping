import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../store/userSlice";

const navStyle =  {
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
};

const logoStyle = {
    fontSize:30
};

const Navbar = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        window.localStorage.removeItem("token");
        dispatch(resetUser());
    };

    return (
        <div style={navStyle}>
            <Link to="/" style={logoStyle}>ACME</Link>
            <Link to="/">Home</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            {user.id ? <p>Welcome {user.username}!!</p> : <Link to="/login">Login</Link>}
            {user.id && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Navbar;