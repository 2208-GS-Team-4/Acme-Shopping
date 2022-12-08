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
      <Link to="/men/jacket">Jackets</Link>
      <Link to="/men/sweater">Sweaters</Link>
      <Link to="/men/pants">Pants</Link>
      <Link to="/men/shirt">Shirts</Link>
      <Link to="/men/socks">Socks</Link>
      <Link to="/men/hat">Hats</Link>
      {/* <Link to="/men/accessories">Accessories</Link> */}
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
