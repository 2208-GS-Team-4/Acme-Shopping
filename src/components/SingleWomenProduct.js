import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SideMenuWomen from "./SideMenuWomen";

const SingleWomenProduct = () => {
  const { allWomensProducts } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = () => {
    const foundProduct = allWomensProducts.filter(
      (product) => product.id === Number(id)
    );
    setProduct(foundProduct);
  };

  const addToCart = async () => {
    const name = product[0].name;
    const size = "M";
    const imageURL = product[0].imageURL;
    const quantity = 1;
    const price = product[0].price;
    const productId = product[0].id;
    const data = {
      name,
      size,
      imageURL,
      quantity,
      price,
      productId,
    };
    await axios.post(`/api/users/${user.id}/cart`, data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="sideMenu">
        <SideMenuWomen />
      </div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imageURL} className="singleProductImg" />
            <div className="singleProductText">
              <h2>{item.name}</h2>
              {user.role==='admin' && <Link to={`/admin/edit-product/${item.id}`} style={{color:'red'}}>Edit</Link>}
              <p>{item.description}</p>
              <p>{item.color}</p>
              <h3>${item.price}</h3> <h4>Please Select Your Size:</h4>
              <select className="sizeInfo">
                {item.option.map((eachOption) => {
                  return (
                    // <div key={eachOption.id}>
                    //  <p>Stock Available: {eachOption.stock}</p>
                    <option key={eachOption.id} value={eachOption.size}>
                      {eachOption.size}
                    </option>
                    // </div>
                  );
                })}
              </select>
              {user.id && <button onClick={addToCart}>Add to cart</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleWomenProduct;
