import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {products.map((product) => {
        return product.name;
      })}
    </div>
  );
};

export default AllWomenProducts;
