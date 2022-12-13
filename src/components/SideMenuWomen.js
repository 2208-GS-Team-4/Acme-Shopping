import React from "react";
import { Link } from "react-router-dom";

const SideMenuWomen = () => {
  return (
    <div>
      <div className="sideMenu">
        <Link to="/women/jacket">Jackets</Link>
        <Link to="/women/dress">Dress</Link>
        <Link to="/women/pants">Pants</Link>
        <Link to="/women/blouse">Blouse</Link>
        <Link to="/women/socks">Socks</Link>
        <Link to="/women/hat">Hats</Link>
        <Link to="/women/underwear">Underwear</Link>
      </div>
    </div>
  );
};

export default SideMenuWomen;
