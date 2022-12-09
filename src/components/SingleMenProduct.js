import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMenProduct = () => {
  const [product, setProduct] = useState({});
  const { productType, id } = useParams();

  const getProduct = async (productType, id) => {
    const response = await axios.get(`/api/men/${productType}/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct(productType, id);
  }, []);

  return <div> ({product} ? yes : no)</div>;
};

export default SingleMenProduct;
