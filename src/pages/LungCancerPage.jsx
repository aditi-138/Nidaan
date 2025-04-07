import React, { useState } from "react";

const LungCancer = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPrediction(""); // Reset any previous prediction
  };

  const handlePredict = () => {
    if (image) {
      // Simulated prediction output
      setPrediction("Squamous carcinoma detected, further diagnosis required.");
    } else {
      setPrediction("Please upload an image first.");
    }
  };

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
        <h2 className="text-center mb-4">🫁 Lung Cancer Image Prediction</h2>

        <div className="mb-3">
          <label className="form-label">Upload Chest X-ray or CT Scan:</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            style={{ backgroundColor: "#ffffff" }}
          />
          {image && (
            <div className="text-center mt-3">
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Scan"
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          )}
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={handlePredict}>
            Predict
          </button>
        </div>

        {prediction && (
          <div className="mt-4 text-center">
            <p><strong>Result:</strong> {prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LungCancer;
