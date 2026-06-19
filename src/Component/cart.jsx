import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={styles.emptyCart}>
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.productImage}
              />

              <div style={styles.productDetails}>
                <h3 style={styles.productName}>
                  {item.name}
                </h3>

                <p style={styles.productPrice}>
                  ₹{item.price}
                </p>

                <p style={styles.stock}>
                  ✓ In Stock
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                style={styles.removeBtn}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={styles.summary}>
            <h2>Order Summary</h2>

            <div style={styles.summaryRow}>
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button style={styles.checkoutBtn}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
    padding: "30px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#111827"
  },

  emptyCart: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  productImage: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "12px",
    border: "1px solid #e5e7eb"
  },

  productDetails: {
    flex: 1,
    marginLeft: "20px"
  },

  productName: {
    margin: 0,
    color: "#111827",
    fontSize: "22px"
  },

  productPrice: {
    color: "#16a34a",
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "8px"
  },

  stock: {
    color: "#10b981",
    marginTop: "5px"
  },

  removeBtn: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  summary: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "12px 0",
    fontSize: "18px"
  },

  checkoutBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Cart;