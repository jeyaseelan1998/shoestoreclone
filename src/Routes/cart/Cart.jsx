import React from "react";

import "./Cart.css";

const Cart = ({ toggler }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <span>Shopping Cart</span>
        <div onClick={toggler} className="close-icon">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Cart;
