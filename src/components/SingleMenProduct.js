import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SideMenuMen from "./SideMenuMen";
import { setCart } from "../store/cartSlice";

const SingleMenProduct = () => {
  const dispatch = useDispatch();
  const [sizeAlert, setSizeAlert] = useState(false);
  const { allMensProducts } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cartProduct.cartProduct);
  const { user } = useSelector((state) => state.user);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [addSize, setAddSize] = useState("S");
  const [addQuantity, setAddQuantity] = useState(1);
  const [itemAlert, setItemAlert] = useState(false);

  const getProduct = () => {
    const foundProduct = allMensProducts.filter(
      (product) => product.id === Number(id)
    );
    setProduct(foundProduct);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const fetchCart = async () => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    dispatch(setCart(response.data));
  };
  useEffect(() => {
    fetchCart();
  }, []);
  const handleSizeChange = (event) => {
    setAddSize(event.target.value);
  };
  const handleQuantity = () => {
    setAddQuantity(addQuantity + 1);
  };
  const addToCart = async () => {
    const name = product[0].name;
    const imageURL = product[0].imageURL;
    const price = product[0].price;
    const productId = product[0].id;
    const quantity = addQuantity;
    const size = addSize;
    const data = {
      name,
      size,
      imageURL,
      quantity,
      price,
      productId,
    };
    const result = cartItems.allProducts.find(
      ({ name }) => name === product[0].name
    );
    setItemAlert(true);
    setTimeout(() => {
      setItemAlert(false);
    }, 2000);
    if (cartItems.length === 0 || !result) {
      setSizeAlert(false);
      axios.post(`/api/users/${user.id}/cart`, data);
      dispatch(setCart(data));
      console.log("fire");
      const newData = await axios.get(`/api/users/${user.id}/cart`);
      dispatch(setCart(newData.data));
    }
    if (result && result.size != addSize) {
      setSizeAlert(false);
      axios.post(`/api/users/${user.id}/cart`, data);
      dispatch(setCart(data));
      console.log("water");
      const newData = await axios.get(`/api/users/${user.id}/cart`);
      dispatch(setCart(newData.data));
    }
    if (result && result.size === addSize) {
      setSizeAlert(true);
    }

    const newData = await axios.get(`/api/users/${user.id}/cart`);
    dispatch(setCart(newData.data));
  };

  return (
    <>
      <SideMenuMen />
      <div>
        {product.map((item) => {
          return (
            <div key={item.id} className="productDetail">
              <img src={item.imageURL} className="singleProductImg" />
              <div>
                <h2>{item.name}</h2>
                {user.role === "admin" && (
                  <Link
                    to={`/admin/edit-product/${item.id}`}
                    style={{ color: "maroon" }}
                  >
                    Edit
                  </Link>
                )}
                <p>{item.description}</p>
                <p>{item.color}</p>
                <h3>${item.price}</h3>
                <div className="pageSizeQuanDetials">
                  <h4>Please Select Size and Quantity:</h4>
                  <select className="sizeInfo" onChange={handleSizeChange}>
                    {item.option.map((eachOption) => {
                      return (
                        <option key={eachOption.id} value={eachOption.size}>
                          {eachOption.size}
                        </option>
                      );
                    })}
                  </select>{" "}
                  <input
                    onChange={handleQuantity}
                    id={product.id}
                    className="quantity"
                    data-value={addQuantity}
                    defaultValue={addQuantity}
                  ></input>
                </div>
                {user.id && (
                  <button onClick={addToCart} className="AddToCart">
                    Add to cart
                  </button>
                )}
                {itemAlert && !sizeAlert && <p>Item added to cart!</p>}
                {sizeAlert && (
                  <p style={{ color: "maroon", marginTop: "10px" }}>
                    This item is already in your cart, you can change the
                    quantity in your shopping cart page
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleMenProduct;
