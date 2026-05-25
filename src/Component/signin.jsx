import React, { useState } from "react";

export default function Signin() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signin data:", form);

    // later you can connect Express API here
    // fetch("http://localhost:5000/api/signin", {...})
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px"
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};