import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/MedicationList.css";

interface CleanedResponseEntry {
  date: string;
  medications: string[];
}

const MedicationList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state?.entry as CleanedResponseEntry;

  if (!entry) {
    return <div>No medication data available.</div>;
  }

  return (
    <div className="MedicationListContainer">
      <button className="BackButton" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <h2>Medication List for {entry.date}</h2>
      <ul>
        {entry.medications.map((med, index) => (
          <li key={index}>{med}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
