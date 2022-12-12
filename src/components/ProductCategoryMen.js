import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductCategoryMen = () => {
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const response = await axios.get(`/api/men/productType/${productType}`);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts(productType);
  }, []);

  return (
    <>
      <div className="sideMenu">
        <Link to="/men/jacket">Jackets</Link>
        <Link to="/men/sweater">Sweaters</Link>
        <Link to="/men/pants">Pants</Link>
        <Link to="/men/shirt">Shirts</Link>
        <Link to="/men/socks">Socks</Link>
        <Link to="/men/hat">Hats</Link>
      </div>{" "}
      <div className="grid-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <img src={product.imageURL} />
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryMen;
