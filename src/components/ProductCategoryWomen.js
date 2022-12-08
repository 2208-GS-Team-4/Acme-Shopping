import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCategoryWomen = () => {
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const response = await axios.get(`/api/women/${productType}`);
    const productData = await response.data;
    setProducts(productData);
  };

  useEffect(() => {
    getProducts(productType);
  }, []);

  return (
    <div>
      {products.map((product) => {
        return product.name;
      })}
    </div>
  );
};

export default ProductCategoryWomen;
