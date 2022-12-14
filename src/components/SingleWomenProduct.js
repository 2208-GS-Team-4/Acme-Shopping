import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleWomenProduct = () => {
  const { allWomensProducts } = useSelector((state)=>state.product);
  const { user } = useSelector((state)=>state.user);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct =  () => {
    const foundProduct = allWomensProducts.filter(product=>product.id===Number(id));
    setProduct(foundProduct);
  };

  const addToCart = async () => {
    const quantity = 1;
    const price = product[0].price;
    const productId = product[0].id;
    const data = {
      quantity,
      price,
      productId
    };
    await axios.post(`/api/users/${user.id}/cart`,data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {" "}
      <div className="sideMenu">
        <Link to="/women/jacket">Jackets</Link>
        <Link to="/women/dress">Dress</Link>
        <Link to="/women/pants">Pants</Link>
        <Link to="/women/blouse">Blouse</Link>
        <Link to="/women/socks">Socks</Link>
        <Link to="/women/hat">Hats</Link>
        <Link to="/women/underwear">Underwear</Link>
      </div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imageURL} className="singleProductImg" />
            <div className="singleProductText">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.color}</p>
              <h3>${item.price}</h3> <h4>Please Select Your Size:</h4>
              <select className="sizeInfo">
                {item.option.map((eachOption) => {
                  return (
                    // <div key={eachOption.id}>
                    //  <p>Stock Available: {eachOption.stock}</p>
                    <option key={eachOption.id} value={eachOption.size}>
                      {" "}
                      {eachOption.size}
                    </option>
                    // </div>
                  );
                })}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleWomenProduct;
