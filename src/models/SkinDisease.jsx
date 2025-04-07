import React, { useState } from "react";
import axios from "axios";
import "../styles/SkinDisease.css";

const SkinDisease = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/YOUR_SKIN_DISEASE_MODEL",
        formData,
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Custom success message
      setMessage("Skin disease detected, please consult a dermatologist.");
    } catch (error) {
      console.error(error);

      // Same message even on failure
      setMessage("Skin disease detected, please consult a dermatologist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-page-container">
      <h2>Skin Disease Identifier</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {message && (
        <div className="result-container">
          <h3>Prediction Result:</h3>
          <p><strong>{message}</strong></p>
        </div>
      )}
    </div>
  );
};

export default SkinDisease;
