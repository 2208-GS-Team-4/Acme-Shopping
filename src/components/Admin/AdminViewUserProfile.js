import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { NotFoundPage } from "..";

const AdminViewUserProfile = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await axios.get(`/api/users/${id}`);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);
  return (
    <div className="viewUserPage">
      <div>
        <h3>User contact information</h3>
        <p>
          Name: {user.firstName}, {user.lastName}
        </p>
        <p>Address: {user.shippingAddress}</p>
        <p>Phone Number: {user.phone}</p>
      </div>
      <div>
        <h3>User payment information</h3>
        <p>Shipping Address: {user.shippingAddress}</p>
        <p>Billing Address: {user.billingAddress}</p>
        {/* <div>Credit Card: {user.creditCard}</div> */}
      </div>
      <div>
        <h3>Login & Security</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
      </div>
    </div>
  );
};

export default AdminViewUserProfile;
