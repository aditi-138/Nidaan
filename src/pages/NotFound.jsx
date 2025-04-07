// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#f8f9fa",
    height: "100vh",
  },
  heading: {
    fontSize: "3rem",
    color: "#dc3545",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.25rem",
    marginBottom: "30px",
  },
  link: {
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
  },
};
