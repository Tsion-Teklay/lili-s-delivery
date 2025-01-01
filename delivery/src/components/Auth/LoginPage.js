import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ usernameOrEmail: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", credentials);
      const { role } = response.data;

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
      alert("Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
