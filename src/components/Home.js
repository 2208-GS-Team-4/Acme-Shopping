import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/userSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };

  return (
    <div id="loggedInDiv">
      <p>Welcome {user.username}!!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
