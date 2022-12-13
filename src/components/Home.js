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
    <>
      <div id="loggedInDiv">
        <p>Welcome {user.username}!!</p>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="adDiv">
        <img src="img/blouse/flowyBlouse2.png" />
        <img src="img/blouse/polkaDotBlouse2.png" />
        <img src="img/blouse/floralBlouse2.png" />
        <img src="img/blouse/fineKnitBlouse2.png" />
      </div>{" "}
      <div className="adText">
        <h1>New Arrivals</h1>
        <p>
          <Link to="/women">Discover more</Link>
        </p>
      </div>
    </>
  );
};

export default Home;
