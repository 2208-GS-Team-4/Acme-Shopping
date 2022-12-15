import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideMenuWomen from "./SideMenuWomen";

const ProductCategoryWomen = () => {
  const { allWomensProducts } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const { productType } = useParams();

  // Rather than making this API call, we should pull all the women's products from the Redux store,
  // then filter based on the productType that was passed into the URL. This saves us from having
  // potentially too many API calls as users switch back and forth between pages.
  const getProducts = async (productType) => {
    const filteredProduct = allWomensProducts.filter(
      (product) => product.type === productType
    );
    setProducts(filteredProduct);
  };

  useEffect(() => {
    getProducts(productType);
  }, [allWomensProducts, productType]);

  return (
    <>
      <SideMenuWomen />
      <div className="grid-container">
        {products.map((product) => {
          return (
            <div className="grid-item">
              <Link to={`/women/${product.type}/${product.id}`}>
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

export default ProductCategoryWomen;
