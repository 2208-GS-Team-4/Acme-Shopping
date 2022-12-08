import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllWomenProducts = () => {
  const [products, setProducts] = useState([]);

  const grabProducts = async () => {
    const allProducts = await axios.get("/api/women");
    setProducts(allProducts.data);
  };
  useEffect(() => {
    grabProducts();
  }, []);

  return (
    <div>
      <Link to="/women/jacket">Jackets</Link>
      <Link to="/women/dress">Dress</Link>
      <Link to="/women/pants">Pants</Link>
      <Link to="/women/blouse">Blouse</Link>
      <Link to="/women/socks">Socks</Link>
      <Link to="/women/hat">Hats</Link>
      <Link to="/women/underwear">Underwear</Link>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/women/${product.type}/${product.id}`}>
              <img src={product.imageURL} />
              <p>{product.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllWomenProducts;
