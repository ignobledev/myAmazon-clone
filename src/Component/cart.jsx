import React from "react";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;