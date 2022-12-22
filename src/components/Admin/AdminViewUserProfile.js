import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { NotFoundPage } from "..";

const AdminViewUserProfile = () => {
  const [user, setUser] = useState({ creditCard: [{ number: "0" }] });
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await axios.get(`/api/users/${id}`);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <div className="viewUserPage">
      <div>
        <h3>User Contact Information</h3>
        <p>
          Name: {user.firstName}, {user.lastName}
        </p>
        <p>Address: {user.shippingAddress}</p>
        <p>Phone Number: {user.phone}</p>
        {console.log(user)}
      </div>
      <div>
        <h3>User Payment Information</h3>
        <p>Shipping Address: {user.shippingAddress}</p>
        <p>Billing Address: {user.billingAddress}</p>
        {user.creditCard && <div>
          <h4 style={{ textDecoration: "underline", marginBottom: "-10px" }}>
            {" "}
            Credit Card:
          </h4>
          <p style={{ marginBottom: "-10px" }}>
            Number: {user.creditCard[0].number}
          </p>
          <p style={{ marginBottom: "-10px" }}>
            {" "}
            Expiration Date: {user.creditCard[0].expiration}{" "}
          </p>
          <p style={{ marginBottom: "-10px" }}>CVV: {user.creditCard[0].cvv}</p>
        </div>}
      </div>
      <div>
        <h3>Login & Security</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Credentials: {user.role}</p>
      </div>
    </div>
  );
};

export default AdminViewUserProfile;
