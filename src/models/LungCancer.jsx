// src/models/LungCancer.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/LungCancer.css";

const LungCancer = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Smoking: "",
    YellowFingers: "",
    Anxiety: "",
    PeerPressure: "",
    ChronicDisease: "",
    Fatigue: "",
    Allergy: "",
    Wheezing: "",
    AlcoholConsuming: "",
    Coughing: "",
    ShortnessOfBreath: "",
    SwallowingDifficulty: "",
    ChestPain: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/YOUR_LUNG_CANCER_MODEL",
        { inputs: formData },
        {
          headers: {
            Authorization: `Bearer `,
          },
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult("Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-page-container">
      <h2>Lung Cancer Predictor</h2>
      <form className="model-form">
        {Object.keys(formData).map((field) => (
          <div key={field} className="form-group">
            <label>{field}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {result && (
        <div className="result-container">
          <h3>Prediction Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LungCancer;
