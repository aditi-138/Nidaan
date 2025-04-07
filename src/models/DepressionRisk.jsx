// src/models/DepressionRisk.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/DepressionRisk.css";

const DepressionRisk = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/YOUR_DEPRESSION_MODEL",
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer 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`,
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
      <h2>Depression Risk Predictor</h2>
      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe how you're feeling today..."
      ></textarea>
      <button onClick={handleSubmit}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {result && (
        <div className="result-container">
          <h3>Prediction Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DepressionRisk;
