import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMenProduct = () => {
  const [product, setProduct] = useState({});
  const { productType, id } = useParams();
  const [loading, setLoading] = useState(true);

  const getProduct = async (productType, id) => {
    const response = await axios.get(`/api/men/${productType}/${id}`);
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct(productType, id);
  }, []);
  console.log(product[0]);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return <div>{product.name}</div>;
    // return <div>hello</div>;
  }
};

export default SingleMenProduct;
