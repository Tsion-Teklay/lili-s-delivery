import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Food Delivery System</h1>
      <div style={styles.buttonContainer}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={styles.button}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

// Basic styles for the page
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    transition: "background-color 0.3s",
  },
};

export default WelcomePage;
