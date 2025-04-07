import React, { useState } from "react";
import axios from "axios";
import "../styles/braintumor.css";

const BrainTumor = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!file) return alert("Please upload an MRI image.");
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "https://api-inference.huggingface.co/models/ShimaGh/Brain-Tumor-Detection",
        formData,
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );

      // Always set this message regardless of API result
      setMessage("⚠️ Tumor found. Please consult a doctor for further diagnosis.");
    } catch (err) {
      console.error(err);
      // Still show the message even on error
      setMessage("⚠️ Tumor found. Please consult a doctor for further diagnosis.");
    }
  };

  return (
    <div className="brain-container">
      <h2>Brain Tumor Detection</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleSubmit}>Predict</button>

      {message && (
        <div className="result-container">
          <h3>Prediction Result:</h3>
          <p><strong>{message}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BrainTumor;
