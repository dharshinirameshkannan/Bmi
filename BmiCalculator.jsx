import React, { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    if (!name || !age || !gender || !weight || !height) {
      alert("Please fill in all fields!");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = "";
    let bmiAdvice = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
      bmiAdvice =
        "You are underweight. Consider a nutritious diet and consultation.";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal";
      bmiAdvice = "You are in the healthy range. Keep up the good work!";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
      bmiAdvice = "You are overweight. A balanced diet and exercise can help.";
    } else {
      bmiStatus = "Obese";
      bmiAdvice =
        "You are in the obese range. Seek professional medical guidance.";
    }

    setStatus(bmiStatus);
    setAdvice(bmiAdvice);
    setShowResult(true);
  };

  const handleSubmit = () => {
    setShowResult(false);
    setName("");
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
    setAdvice("");
  };

  return (
    <div className="container">
      {!showResult && (
        <>
          <h1>BMI Calculator</h1>
          <form
            className="bmi-form"
            onSubmit={(e) => {
              e.preventDefault();
              calculateBMI();
            }}
          >
            <div className="input-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="input-group">
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>
            <div className="input-group">
              <label>Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
              />
            </div>
            <div className="input-group">
              <label>Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
              />
            </div>
            <button type="submit">Calculate</button>
          </form>
        </>
      )}

      {showResult && (
        <div className={`result-box ${status.toLowerCase()}`}>
          <h2>Result</h2>
          <div className="result-row">
            <span className="label">Name:</span>
            <span className="value">{name}</span>
          </div>
          <div className="result-row">
            <span className="label">Age:</span>
            <span className="value">{age}</span>
          </div>
          <div className="result-row">
            <span className="label">Gender:</span>
            <span className="value">{gender}</span>
          </div>
          <div className="result-row">
            <span className="label">BMI:</span>
            <span className="value">{bmi}</span>
          </div>
          <div className="result-row">
            <span className="label">Status:</span>
            <span className="value status">{status}</span>
          </div>
          <div className="result-row advice-row">
            <span className="label">Advice:</span>
            <span className="value">{advice}</span>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
