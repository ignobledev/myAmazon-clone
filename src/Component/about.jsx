import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          maxWidth: "700px",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1>About Us</h1>

        <p>
          Welcome to MyStore ✨
        </p>

        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#203a43",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default About;