import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="adDiv">
        <img src="img/blouse/flowyBlouse2.png" />
        <img src="img/blouse/polkaDotBlouse2.png" />
        <img src="img/blouse/floralBlouse2.png" />
        <img src="img/blouse/fineKnitBlouse2.png" />
      </div>
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
