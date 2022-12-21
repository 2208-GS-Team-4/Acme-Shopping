import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { NotFoundPage } from "..";

const AdminViewUserProfile = () => {
    const [user,setUser] = useState({});
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const { id } = useParams();

    const fetchUser = async()=>{
        const response = await axios.get(`/api/users/${id}`);
        setUser(response.data);
    };

    useEffect(() => {
        fetchUser();
      }, []);

    return (
        <>
            <div>
                <h1>User contact information</h1>
                <p>Name: {user.firstName}, {user.lastName}</p>
                <p>Address: {user.shippingAddress}</p>
                <p>Phone Number: {user.phone}</p>
            </div>
            <div>
                <h1>User payment information</h1>
                <p>Shipping Address: {user.shippingAddress}</p>
                <p>Billing Address: {user.billingAddress}</p>
                <p>Credit Card: {user.creditCard}</p>
            </div>
            <div>
                <h1>Login & Security</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
            </div>
        </>
    );
};

export default AdminViewUserProfile;