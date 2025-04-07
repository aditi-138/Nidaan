import React from "react";
import { useNavigate } from "react-router-dom";

const Skin = () => {
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
        <h2 className="text-center mb-3">🧴 Skin Disease Detection</h2>

        <p>
          <strong>Summary:</strong> Skin diseases range from mild rashes to severe
          infections or skin cancer. Early diagnosis helps prevent complications.
        </p>

        <p><strong>Symptoms:</strong></p>
        <ul>
          <li>Redness or irritation</li>
          <li>Blisters or bumps</li>
          <li>Discoloration</li>
          <li>Itching or pain</li>
        </ul>

        <p><strong>Treatment:</strong></p>
        <ul>
          <li>Topical creams</li>
          <li>Antibiotics</li>
          <li>Skin biopsy if necessary</li>
          <li>Moisturizers & sun protection</li>
        </ul>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/model/skin")}
          >
            Go to Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skin;
