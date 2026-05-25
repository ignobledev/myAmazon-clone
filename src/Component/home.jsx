import React from "react";

export default function Home() {
  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👕" },
    { name: "Home", icon: "🏠" },
    { name: "Accessories", icon: "🎧" }
  ];

  const products = [
    { id: 1, name: "iPhone 14", price: 69999 },
    { id: 2, name: "Nike Shoes", price: 4999 },
    { id: 3, name: "Smart Watch", price: 2999 },
    { id: 4, name: "Headphones", price: 1499 }
  ];
   const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  };


  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>ShopEase 🛍️</h1>
        <p style={styles.subtitle}>
          Best deals on Electronics, Fashion & More
        </p>

        <button style={styles.button}>
          Shop Now
        </button>
      </div>

      {/* CATEGORIES */}
      <h2 style={styles.heading}>Shop by Category</h2>

      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <h2 style={styles.heading}>🔥 Trending Products</h2>

      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.productCard}>
            <div style={styles.imageBox}>Image</div>

            <h3>{item.name}</h3>
            <p style={styles.price}>₹ {item.price}</p>

            <button onClick={()=>addToCart(products)} style={styles.addBtn}>
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>🚚 Fast Delivery | 🔒 Secure Payment | 🔁 Easy Returns</p>
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    padding: "20px",
    backgroundColor: "#f9fafb"
  },

  /* HERO */
  hero: {
    textAlign: "center",
    padding: "60px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #2563eb, #1e40af)",
    color: "white"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.9
  },
  button: {
    marginTop: "15px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "#2563eb",
    fontWeight: "bold",
    cursor: "pointer"
  },

  /* HEADINGS */
  heading: {
    marginTop: "30px",
    marginBottom: "15px"
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "15px"
  },

  /* CATEGORY CARD */
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
    cursor: "pointer"
  },
  icon: {
    fontSize: "30px",
    marginBottom: "5px"
  },

  /* PRODUCT CARD */
  productCard: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #ddd"
  },
  imageBox: {
    height: "120px",
    backgroundColor: "#e5e7eb",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px"
  },
  price: {
    fontWeight: "bold",
    color: "#16a34a"
  },
  addBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  /* FOOTER */
  footer: {
    marginTop: "40px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111827",
    color: "white",
    borderRadius: "10px"
  }
};