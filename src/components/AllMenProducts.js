import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {SideMenuMen} from "./";

const AllMenProducts = () => {
  const { allMensProducts } = useSelector((state) => state.product);

  return (
    <div>
      <SideMenuMen />
      <div className="grid-container">
        {allMensProducts.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <Link to={`/men/${product.type}/${product.id}`}>
                <img src={product.imageURL} />
                <p className="productDisplayName">{product.name}</p>
              </Link>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default AllMenProducts;