
    import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Your ${name} ${email} accepted`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#243b55",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "gray",
            marginBottom: "30px",
          }}
        >
          We'd love to hear from you ✨
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
          ></textarea>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
  resize: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#243b55",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Contact;