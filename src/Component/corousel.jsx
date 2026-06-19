import React, { useEffect, useState } from "react";

export default function Carousel() {
  const slides = [
    {
         image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      title: "🔥 Summer Sale",
      description: "Up to 50% Off on Electronics"
    },
    {
      title: "🚚 Free Shipping",
      description: "Orders Above ₹999"
    },
    {
      title: "🎉 New Arrivals",
      description: "Latest Products Just Added"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {slides[current].title}
      </h1>

      <p style={styles.description}>
        {slides[current].description}
      </p>

      <div style={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor:
                current === index ? "white" : "#93c5fd"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "250px",
    borderRadius: "15px",
    background:
      "linear-gradient(135deg, #2563eb, #1e40af)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px"
  },

  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },

  description: {
    fontSize: "18px"
  },

  dots: {
    display: "flex",
    gap: "8px",
    marginTop: "20px"
  },

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%"
  }
};