import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleWomenProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    const response = await axios.get(`/api/women/id/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imageURL} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.color}</p>
            <h3>${item.price}</h3>
            {item.option.map((eachOption) => {
              return (
                <div key={eachOption.id}>
                  <h4>Options Available:</h4>
                  <p>Stock Available: {eachOption.stock}</p>
                  <p>Size Available: {eachOption.size}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SingleWomenProduct;
