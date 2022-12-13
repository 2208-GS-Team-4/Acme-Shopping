import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCategoryMen = () => {
  const {allMensProducts} = useSelector((state)=>state.product);
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  const getProducts = () => {
    const filteredProducts = allMensProducts.filter(product=>{
      return product.type===productType;
    });
    setProducts(filteredProducts);
  };

  useEffect(() => {
    getProducts();
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
        <Link to="/men/underwear">Underwear</Link>
      </div>{" "}
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
