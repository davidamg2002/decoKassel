import React from "react";

const CartContent = () => {
  return (
    <div>
      <div className="cart-content-header">
        <h4>YOUR CART IS EMPTY</h4>
        <p>no item in your cart</p>
      </div>
      <div className="cart-content-footer">
        <h3>STILL NOT SURE WHERE TO BEGIN ?</h3>
        <button className="collection-btn">DISCOVER</button>
      </div>
    </div>
  );
};

export default CartContent;
