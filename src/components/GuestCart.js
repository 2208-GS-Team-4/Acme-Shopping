import React from "react";
import FAQMain from "./FAQ/MainFAQ";

const GuestCart = () => {
  const guestCart = JSON.parse(localStorage.getItem('guestCart'));

  return (
    <div>
      <form className="cartForm">
        <h1 className="cart">Cart</h1>
        <ul className="cartItem">
          {guestCart.map((product) => {
            return (
              <li key={product.productId}>
                <p> {product.name}</p>
                <p>{product.size}</p>
                <input
                  className="quantity"
                  placeholder={product.quantity}
                ></input>
                <button
                  id={product.id}
                  className="saveButton"
                >
                  Save
                </button>
              </li>
            );
          })}
        </ul>
        <p>* Tax and shipping are not included</p>
      </form>
      <FAQMain />
    </div>
  );
};

export default GuestCart;
