import React from "react";
import { useNavigate } from "react-router-dom";

const Obesity = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/background.jpeg')", // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        padding: "2rem",
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: "#ffffffcc",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2 className="text-center mb-3">⚖️ Obesity Risk Prediction</h2>
        <p>
          <strong>Summary:</strong> Obesity is a condition where excess body
          fat increases the risk of health problems like heart disease,
          diabetes, and joint issues.
        </p>

        <p>
          <strong>Symptoms:</strong>
        </p>
        <ul>
          <li>Increased body weight</li>
          <li>Shortness of breath</li>
          <li>High blood pressure</li>
          <li>Joint pain</li>
        </ul>

        <p>
          <strong>Treatment:</strong>
        </p>
        <ul>
          <li>Dietary changes</li>
          <li>Regular physical activity</li>
          <li>Behavioral therapy</li>
          <li>Medications or surgery in extreme cases</li>
        </ul>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/model/obesity")}
          >
            Go to Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Obesity;
