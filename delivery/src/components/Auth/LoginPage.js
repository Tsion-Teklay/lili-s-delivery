import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ usernameOrEmail: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    console.log("Submitting:", credentials); // Log the payload
  
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      const { role } = response.data;
  
      // Example token storage for future requests
      localStorage.setItem("authToken", response.data.token);
  
      switch (role) {
        case "customer":
          navigate("/dashboard/customer");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "driver":
          navigate("/dashboard/driver");
          break;
        case "staff":
          navigate("/dashboard/staff");
          break;
        default:
          alert("Unknown role.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="Username or Email"
          value={credentials.usernameOrEmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
