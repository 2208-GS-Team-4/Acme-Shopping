import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {SideMenuWomen} from "./";

const AllWomenProducts = () => {
  const { allWomensProducts } = useSelector((state) => state.product);

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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllWomenProducts;