import React from "react";
import leatherbag from "./images/leatherbag.jpg";
import watch from "./images/watch.avif";
import iphone from "./images/ipone.avif";

export default function ProductList() {
   const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const products = {
    Electronics: [
      {
        id: 1,
        name: "iPhone 14",
        price: 69999,
        image:iphone
        
      },
      {
        id: 2,
        name: "Samsung Galaxy Watch",
        price: 19999,
        image:watch
      },
      {
        id: 3,
        name: "leather bags",
        price: 4999,
        image: leatherbag
      }
    ],

    Fashion: [
      {
        id: 4,
        name: "Men T-Shirt",
        price: 799,
        image: "https://unsplash.com/photos/a-man-in-a-tan-shirt-and-black-pants-_NTxalBDieo"
      },
      {
        id: 5,
        name: "Women Jacket",
        price: 1999,
        image: "https://via.placeholder.com/200"
      },
      {
        id: 6,
        name: "Sneakers",
        price: 2999,
        image: "https://via.placeholder.com/200"
      }
    ]
  };

  return (
    <div style={styles.container}>
      <h1>🛍️ Our Products</h1>

      {Object.keys(products).map((category) => (
        <div key={category} style={styles.categorySection}>
          
          <h2 style={styles.categoryTitle}>{category}</h2>

          <div style={styles.grid}>
            {products[category].map((product) => (
              <div key={product.id} style={styles.card}>
                
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />

                <h3>{product.name}</h3>
                <p>₹ {product.price}</p>

                <button  onClick ={()=> addToCart (product) }style={styles.button}>
                  Add to Cart
                </button>

              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  categorySection: {
    marginBottom: "40px"
  },
  categoryTitle: {
    borderLeft: "5px solid #2563eb",
    paddingLeft: "10px",
    marginBottom: "15px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};