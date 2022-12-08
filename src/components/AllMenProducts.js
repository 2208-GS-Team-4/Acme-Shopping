import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllMenProducts = () => {
  const [products, setProducts] = useState([]);

  const grabProducts = async () => {
    const allProducts = await axios.get("/api/men");
    setProducts(allProducts.data);
  };

  useEffect(() => {
    grabProducts();
  }, []);

  return (
    <div>
      <Link to="/men/jacket">Jacket</Link>
      <Link to="/men/sweater">Sweater</Link>
      <Link to="/men/pants">Pants</Link>
      <Link to="/men/shirt">Shirts</Link>
      <Link to="/men/socks">Socks</Link>
      <Link to="/men/hats">Hats</Link>
      <Link to="/men/accessory">Accessory</Link>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/men/${product.type}/${product.id}`}>
              <img src={product.imageURL} />
              <p>{product.name}</p>
            </Link>
          </div>
        );
      })}
      THIS IS THE ALL MENS PAGE
    </div>
  );
};

export default AllMenProducts;
