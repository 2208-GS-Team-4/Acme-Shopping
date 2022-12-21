import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotFoundPage } from "..";

const Admin = () => {
  const { user } = useSelector((state) => state.user);

  if (user.role !== "admin") return <NotFoundPage />;
  return (
    <>
      <div className="sideMenu">
        <Link to="/admin/add-product">Add a New Product</Link>
        <Link to="/men">Men's</Link>
        <Link to="/women">Women's</Link>
        <Link to="/admin/view-users">Users</Link>
      </div>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p className="dashboardContent">
          Hi {user.firstName}, time to do some work
        </p>
      </div>
    </>
  );
};

export default Admin;
