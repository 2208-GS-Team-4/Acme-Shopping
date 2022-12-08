import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCategoryMen = () => {
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const response = await axios.get(`/api/men/${productType}`);

    setProducts(response.data);
  };

  useEffect(() => {
    getProducts(productType);
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <img src={product.imageURL} />
            <p>{product.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategoryMen;
