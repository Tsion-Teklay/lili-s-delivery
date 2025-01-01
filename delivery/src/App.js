import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import CustomerDashboard from "./components/dashboard/CustomerDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import DriverDashboard from "./components/dashboard/DriverDashboard";
import StaffDashboard from "./components/dashboard/StaffDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/driver" element={<DriverDashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
