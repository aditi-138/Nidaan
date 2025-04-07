// src/pages/DiseaseModels.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./DiseaseModels.css";

const DiseaseModels = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: "Brain Tumor Detector",
      description: "Upload MRI scans to detect the presence of a brain tumor.",
      route: "/braintumor",
    },
    {
      name: "Diabetes Predictor",
      description: "Predict your diabetes risk using health parameters.",
      route: "/diabetes",
    },
    {
      name: "Obesity Risk Predictor",
      description: "Get insights on your obesity risk based on body metrics.",
      route: "/obesity",
    },
    {
      name: "Depression Risk Predictor",
      description: "Analyze psychological factors to assess depression risk.",
      route: "/depression",
    },
    {
      name: "Skin Disease Identifier",
      description: "Upload skin images to identify possible skin conditions.",
      route: "/skin",
    },
    {
      name: "Lung Cancer Predictor",
      description: "Predict lung cancer risk using chest scan analysis.",
      route: "/lungcancer",
    },
  ];

  return (
    <div className="disease-container">
      <h2>Disease Predictor Models</h2>
      <div className="card-grid">
        {models.map((model, index) => (
          <div key={index} className="model-card">
            <h3>{model.name}</h3>
            <p>{model.description}</p>
            <button onClick={() => navigate(model.route)}>Try Model</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseModels;
