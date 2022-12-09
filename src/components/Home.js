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
      {user.id && <p>Welcome {user.username}!!</p>}
      {user.id && <button onClick={logout}>Logout</button>}
      {!user.id && <Link to="/login">Login</Link>}
    </div>
  );
};

export default Home;
