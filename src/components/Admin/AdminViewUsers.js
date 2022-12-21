import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminViewUsers = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`/api/users/`, {
      headers: { Authorization: "Bearer " + token },
    });
    setUserList(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {" "}
      <div className="sideMenu">
        <Link to="/admin/add-product">Add a New Product</Link>
        <Link to="/men">Men's</Link>
        <Link to="/women">Women's</Link>
        <Link to="/admin/view-users">Users</Link>
      </div>{" "}
      <div className="dashboard">
        {userList.map((user) => {
          return (
            <p key={user.id}>
              {user.lastName}, {user.firstName}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default AdminViewUsers;
