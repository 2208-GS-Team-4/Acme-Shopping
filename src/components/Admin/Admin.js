import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotFoundPage } from '..';

const Admin = () => {
    const { user } = useSelector((state) => state.user);

    if(user.role!=='admin') return <NotFoundPage />
    return (
        <>
           <Link to="/admin/add-product">Add new</Link>
           <Link to="/men">Men's</Link>
           <Link to="/women">Women's</Link>
        </>
    );
};

export default Admin;