import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideMenuMen } from "./";

const ProductCategoryMen = () => {
  const { allMensProducts } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const filteredProduct = allMensProducts.filter(
      (product) => product.type === productType
    );
    setProducts(filteredProduct);
  };

  useEffect(() => {
    getProducts(productType);
  }, [allMensProducts, productType]);

  return (
    <>
      <SideMenuMen />
      <div className="grid-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <Link to={`/men/${product.type}/${product.id}`}>
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

export default ProductCategoryMen;
