import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleWomenProduct = () => {
  const [product, setProduct] = useState({});
  const { productType, id } = useParams();
  const [loading, setLoading] = useState(true);

  const getProduct = async (productType, id) => {
    const response = await axios.get(`/api/women/${productType}/${id}`);
    setProduct(response.data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getProduct(productType, id);
  }, []);

  if(loading) return (
    <p>Loading...</p>
  );
  return(
    <div>{product.name}</div>
  );
};

export default SingleWomenProduct;
