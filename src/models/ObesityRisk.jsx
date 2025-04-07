import React, { useState } from "react";
import "../styles/ObesityRisk.css";

const ObesityRisk = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Height: "",
    Weight: "",
    family_history_with_overweight: "",
  });

  const [bmi, setBmi] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { Height, Weight } = formData;
    const heightInMeters = parseFloat(Height);
    const weightInKg = parseFloat(Weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
      setPrediction(calculatedBmi > 25 ? "Obese" : "Not Obese");
    } else {
      setBmi(null);
      setPrediction("Please enter valid height and weight.");
    }
  };

  return (
    <div className="model-page-container">
      <h2>Obesity Risk Prediction</h2>
      <p>Please enter your details to calculate BMI and predict obesity risk:</p>

      <form className="model-form">
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>Height (in meters):</label>
          <input
            type="number"
            step="0.01"
            name="Height"
            value={formData.Height}
            onChange={handleChange}
            placeholder="Enter height in meters"
          />
        </div>

        <div className="form-group">
          <label>Weight (in kg):</label>
          <input
            type="number"
            step="0.1"
            name="Weight"
            value={formData.Weight}
            onChange={handleChange}
            placeholder="Enter weight in kg"
          />
        </div>

        <div className="form-group">
          <label>Family History of Obesity:</label>
          <select
            name="family_history_with_overweight"
            value={formData.family_history_with_overweight}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="button" onClick={handleSubmit}>
          Predict
        </button>
      </form>

      {bmi && (
        <div className="result-container">
          <h3>BMI: {bmi}</h3>
          <h3>Prediction: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default ObesityRisk;
