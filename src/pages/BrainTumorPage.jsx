import React from "react";
import { useNavigate } from "react-router-dom";

const BrainTumor = () => {
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
        <h2 className="text-center mb-3">🧠 Brain Tumor Detection</h2>

        <p>
          <strong>Summary:</strong> Brain tumors are abnormal growths of cells in
          the brain. They can be cancerous or non-cancerous and may affect brain
          function depending on their location and size.
        </p>

        <p><strong>Symptoms:</strong></p>
        <ul>
          <li>Persistent headaches</li>
          <li>Nausea or vomiting</li>
          <li>Seizures</li>
          <li>Vision or hearing problems</li>
          <li>Memory loss or personality changes</li>
        </ul>

        <p><strong>Treatment:</strong></p>
        <ul>
          <li>Surgery</li>
          <li>Radiation therapy</li>
          <li>Chemotherapy</li>
          <li>Targeted drug therapy</li>
        </ul>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/model/braintumor")}
          >
            Go to Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrainTumor;
