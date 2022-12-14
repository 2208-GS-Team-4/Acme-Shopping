import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleWomenProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  // Rather than making this API call, we should pull all the women's products from the Redux store,
  // then filter based on the id that was passed into the URL. This saves us from having
  // potentially too many API calls as users switch back and forth between pages.
  const getProduct = async (id) => {
    const response = await axios.get(`/api/women/id/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct(id);
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
