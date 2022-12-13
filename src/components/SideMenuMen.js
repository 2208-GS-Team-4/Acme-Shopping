import React from "react";
import { Link } from "react-router-dom";

const SideMenuMen = () => {
  return (
    <div>
      <div className="sideMenu">
        <Link to="/men/jacket">Jackets</Link>
        <Link to="/men/sweater">Sweaters</Link>
        <Link to="/men/pants">Pants</Link>
        <Link to="/men/shirt">Shirts</Link>
        <Link to="/men/socks">Socks</Link>
        <Link to="/men/hat">Hats</Link>
        <Link to="/men/underwear">Underwear</Link>
      </div>
    </div>
  );
};

export default SideMenuMen;
