import React from "react";
import { useNavigate } from "react-router-dom";

const Diabetes = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/background.jpeg')",
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
        <h2 className="text-center mb-3">🩸 Diabetes Risk Prediction</h2>

        <p>
          <strong>Summary:</strong> Diabetes is a chronic disease that affects how
          your body turns food into energy. If untreated, it can lead to heart
          disease, kidney issues, and nerve damage.
        </p>

        <p><strong>Symptoms:</strong></p>
        <ul>
          <li>Frequent urination</li>
          <li>Extreme thirst or hunger</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
          <li>Slow healing wounds</li>
        </ul>

        <p><strong>Treatment:</strong></p>
        <ul>
          <li>Healthy diet and exercise</li>
          <li>Insulin therapy</li>
          <li>Oral medications</li>
          <li>Regular blood sugar monitoring</li>
        </ul>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/model/diabetes")}
          >
            Go to Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diabetes;
