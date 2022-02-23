import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <img src="/images/error.jpg" alt="error" />
      <div>
        <Link to="/" className="linkError">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
