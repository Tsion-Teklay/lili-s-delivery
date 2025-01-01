import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./components/Customers/CustomerList";
import AddCustomer from "./components/Customers/AddCustomer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
