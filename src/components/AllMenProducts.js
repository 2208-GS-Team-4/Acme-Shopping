import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {SideMenuMen} from "./";
import { useSelector } from "react-redux";

const AllMenProducts = () => {
  const {allMensProducts} = useSelector((state)=>state.product);
  // const [products, setProducts] = useState([]);

  // const grabProducts = async () => {
  //   const allProducts = await axios.get("/api/men");
  //   setProducts(allProducts.data);
  // };

  // useEffect(() => {
  //   grabProducts();
  // }, []);

  return (
    <div>
      <SideMenuMen />
      {/* <Link to="/men/accessories">Accessories</Link> */}
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
