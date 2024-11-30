// Loader.js
import React from "react";
import "./loader.css"; // Optional: add styles for loader

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Sending your message...</p>
    </div>
  );
};

export default Loader;
