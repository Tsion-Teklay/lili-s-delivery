import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../../services/api";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await getCustomers(); 
      console.log("Fetched customers:", response.data); // Log the response to verify
      setCustomers(response.data); // Ensure this updates the state
    } catch (error) {
      console.error("Error fetching customers:", error);
      alert("Failed to fetch customers.");
    }
  };
  

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  return (
    <div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
