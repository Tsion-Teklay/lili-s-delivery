import React, { useState } from "react";
import { createCustomer } from "../../services/api";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCustomer(formData);
    alert("Customer added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer</h2>
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />
      <label>Password:</label>
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCustomer;
