import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DeleteFromCart from "./DeleteCartItem";
import { setCart, setTotal } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const OrderHistory = () => {
  const { user } = useSelector((state) => state.user);
  const [order, setOrder] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.get(`/api/users/${user.id}/order`);
    setOrder(response.data);
  };
  console.log(order);
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="orderHistoryForm">
      <h1>Your Orders</h1>{" "}
      <div>
        {order.map((singleOrder) => {
          return (
            <>
              <p className="orderGridItem"> Order Number: {singleOrder.id}</p>

              <div className="orderGrid">
                <p className="orderGridItem">Status: </p>{" "}
                <Link to="/checkout">
                  {" "}
                  <p className="orderGridItem">{singleOrder.status}</p>
                </Link>
                <p className="orderGridItem">Total: </p>
                <p className="orderGridItem">{singleOrder.total}</p>
                <p className="orderGridItem">Recipient: </p>{" "}
                <p className="orderGridItem">{singleOrder.contactName}</p>
                <p className="orderGridItem">Shipping: </p>
                <p className="orderGridItem">{singleOrder.shippingOption}</p>
              </div>
            </>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default OrderHistory;
