import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DeleteFromCart from "./DeleteCartItem";
import { setCart, setTotal } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FAQMain from "./FAQ/MainFAQ";
const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cartProduct.cartProduct);
  const total = useSelector((state) => state.cartProduct.cartProduct);
  const [quantity, setQuantity] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchCart = async () => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    dispatch(setCart(response.data));
    dispatch(setTotal(response.data));
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantity = async (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };
  const saveCartEdit = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    const newQuantity = { quantity, id };
    await axios.put(`/api/users/${user.id}/cart`, newQuantity);
    const response = await axios.get(`/api/users/${user.id}/cart`);
    dispatch(setCart(response.data));
  };

  if (!cart.allProducts) {
    return "wait a moment";
  }
  return (
    <div>
      <form className="cartForm">
        <h1 className="cart">Cart</h1>
        <ul className="cartItem">
          {cart.allProducts.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.imageURL} />
                <p> {product.name}</p>
                <p>{product.size}</p>
                <input
                  onInput={handleQuantity}
                  className="quantity"
                  placeholder={product.quantity}
                  data-value={quantity}
                ></input>
                <button
                  onClick={saveCartEdit}
                  id={product.id}
                  className="saveButton"
                >
                  Save
                </button>
                <DeleteFromCart product={product} />
              </li>
            );
          })}{" "}
        </ul>{" "}
        <p>Cart Total:{total.cart.total}</p>
        <p>* Tax and shipping are not included</p>
        <Link to="/checkout">
          {" "}
          <button className="submit">Check Out</button>
        </Link>
      </form>
      <FAQMain />
    </div>
  );
};

export default Cart;
