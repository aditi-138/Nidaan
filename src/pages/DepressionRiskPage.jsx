import React from "react";
import { useNavigate } from "react-router-dom";

const Depression = () => {
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
        <h2 className="text-center mb-3">🧠 Depression Risk Assessment</h2>

        <p>
          <strong>Summary:</strong> Depression is a mental health disorder marked
          by persistent sadness, lack of interest, and decreased energy. Early
          diagnosis can improve quality of life significantly.
        </p>

        <p>
          <strong>Symptoms:</strong>
        </p>
        <ul>
          <li>Persistent sadness or emptiness</li>
          <li>Loss of interest in activities</li>
          <li>Fatigue or low energy</li>
          <li>Sleep disturbances</li>
          <li>Difficulty concentrating</li>
        </ul>

        <p>
          <strong>Treatment:</strong>
        </p>
        <ul>
          <li>Psychotherapy (e.g., CBT)</li>
          <li>Medications (antidepressants)</li>
          <li>Exercise and lifestyle changes</li>
          <li>Support from family and peers</li>
        </ul>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/model/depression")}
          >
            Go to Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Depression;
