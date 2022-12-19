import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DeleteFromCart from "./DeleteCartItem";
import { setCart, setTotal } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

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
      <h1>Your Orders</h1>
      {order.map((singleOrder) => {
        return (
          <div>
            <div className="orderHistory">
              Order Number: {singleOrder.id}:
              <p>Order Total: {singleOrder.total}</p>
              <p>Order Status: {singleOrder.status}</p>
              <p>Order Recipient: {singleOrder.contactName}</p>
              <p>Recipient Contact Number: {singleOrder.contactPhone}</p>
              <p>Order Shipping Option:{singleOrder.shippingOption}</p>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default OrderHistory;
