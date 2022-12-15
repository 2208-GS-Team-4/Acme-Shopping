import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideMenuWomen from "./SideMenuWomen";

const ProductCategoryWomen = () => {
  const { allWomensProducts } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const filteredProduct = allWomensProducts.filter(
      (product) => product.type === productType
    );
    setProducts(filteredProduct);
  };

  useEffect(() => {
    getProducts(productType);
  }, [allWomensProducts, productType]);

  return (
    <>
      <SideMenuWomen />
      <div className="grid-container">
        {products.map((product) => {
          return (
            <div className="grid-item">
              <Link to={`/women/${product.type}/${product.id}`}>
                <img src={product.imageURL} />
                <p className="productDisplayName">{product.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryWomen;
