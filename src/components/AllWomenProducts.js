import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {SideMenuWomen} from "./";

const AllWomenProducts = () => {
  const { allWomensProducts } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <SideMenuWomen />
      <div className="grid-container">
        {allWomensProducts.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <Link to={`/women/${product.type}/${product.id}`}>
                <img src={product.imageURL} />
                <p className="productDisplayName">{product.name}</p>
              </Link>
              {user.role==='admin' && <Link to={`/admin/edit-product/${product.id}`} style={{color:'red'}}>Edit</Link>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllWomenProducts;