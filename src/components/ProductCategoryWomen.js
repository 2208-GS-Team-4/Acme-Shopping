import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductCategoryWomen = () => {
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = async (productType) => {
    const response = await axios.get(`/api/women/productType/${productType}`);
    const productData = await response.data;
    setProducts(productData);
  };

  useEffect(() => {
    getProducts(productType);
  }, []);

  return (
    <>
      <div className="sideMenu">
        <Link to="/women/jacket">Jackets</Link>
        <Link to="/women/dress">Dress</Link>
        <Link to="/women/pants">Pants</Link>
        <Link to="/women/blouse">Blouse</Link>
        <Link to="/women/socks">Socks</Link>
        <Link to="/women/hat">Hats</Link>
        <Link to="/women/underwear">Underwear</Link>
      </div>
      <div className="grid-container">
        {products.map((product) => {
          return (
            <div className="grid-item">
              <img src={product.imageURL} />
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryWomen;
