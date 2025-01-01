import React, { useState } from "react";
import axios from "axios";
import "../../styles/SignupPage.css";  // Import your CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/signup", formData);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed.");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1> {/* Add class for styling */}
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="driver">Driver</option>
          <option value="staff">Staff</option>
        </select>
        <div className="text-center"> {/* Center the button */}
          <button type="submit" className="signup-button btn-custom">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;