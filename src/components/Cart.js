import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const [cart,setCart] = useState([]);

  const fetchCart = async() => {
    const response = await axios.get(`/api/users/${user.id}/cart`);
    setCart(response.data.products);
  };

  useEffect(()=>{
    fetchCart();
  },[]);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => {
          return (
            <div key={product.id} className="grid-item">
              <img src={product.imageURL} />
              <p className="productDisplayName">{product.name}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Cart;