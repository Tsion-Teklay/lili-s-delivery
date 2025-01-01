import React from "react";
import { Link } from "react-router-dom";
import "../styles/WelcomePage.css";
import "../styles/common.css";

const WelcomePage = () => {
  return (
    <div className="row g-0 align-items-center">
      <div className="col-md-6 welcome-image">
        {/* Optional: You can add an image here if needed */}
      </div>
      <div className="col-md-6 text-center p-5">
        <h1 className="mb-4 welcome-title">Welcome to Lili’s Cafe and Restaurant</h1>
        <div className="d-flex flex-column align-items-center">
          <Link to="/login" className="mb-3">
            <button className="btn btn-primary btn-lg btn-custom">Login</button>
          </Link>
          <p className="mt-2">Don't have an account?</p>
          <Link to="/signup">
            <button className="btn btn-primary btn-lg btn-custom">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;