import React from "react";
import "./css/Home.css";
import { GiMedicines } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

interface MedicationData {
  [key: string]: string;
}

interface ResponseEntry {
  date: string;
  medications: MedicationData;
}

interface CleanedResponseEntry {
  date: string;
  medications: string[];
}

interface DataStructure {
  data: {
    response: ResponseEntry[];
  };
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const data: DataStructure = {
    data: {
      response: [
        {
          date: "2024-06-07",
          medications: {
            "Medicine 10": "",
            "Medicine 11": "",
            "Medicine 12": "",
            "Medicine 13": "",
            "%Medicine 14 ": "", // Need to trim data (like %) while displaying
            "Medicine 15": "",
            "Medicine 16": "",
            "Medicine 17": "",
            "Medicine 18": "",
          },
        },
        {
          date: "2024-06-08",
          medications: {
            " Medicine 21": "",
            " Medicine 22": "", // Need to trim spaces while displaying
            " Medicine 23": "",
            " Medicine 24": "",
            " Medicine 25": "",
          },
        },
        {
          date: "2024-06-09",
          medications: {
            " Medicine 31": "",
            " Medicine $32": "", // Need to trim spaces and $ sign while displaying
            " Medicine 33": "",
            " Medicine 34": "",
          },
        },
      ],
    },
  };

  function cleanMedicationNames(medicationDict: MedicationData): string[] {
    const cleanedMedications: string[] = [];
    for (let med in medicationDict) {
      const cleanedMed = med.trim().replace("%", "").replace("$", "");
      cleanedMedications.push(cleanedMed);
    }
    return cleanedMedications;
  }

  const cleanedData: { response: CleanedResponseEntry[] } = {
    response: [],
  };

  data.data.response.forEach((entry) => {
    const cleanedEntry: CleanedResponseEntry = {
      date: entry.date,
      medications: cleanMedicationNames(entry.medications),
    };
    cleanedData.response.push(cleanedEntry);
  });

  const handleClick = (entry: CleanedResponseEntry) => {
    navigate("/medication-list", { state: { entry } });
  };

  return (
    <div className="MainHome">
      <div className="HelthIssue">
        <div>Helth Issue</div>
        <div>Learn More</div>
      </div>
      <div className="DayContainer">
        {cleanedData.response.map((entry, index) => (
          <div
            key={index}
            className={`DayBox${index}`}
            onClick={() => handleClick(entry)}
          >
            <div className="DayBoxItem">
              {index === 0 ? "YESTERDAY" : index === 1 ? "TODAY" : "TOMORROW"}
            </div>
            <div className="DayBoxItem">
              <GiMedicines style={{ fontSize: "20px" }} />
            </div>
            <div className="DayBoxItem">Medication</div>
            <div className="DayBoxItem">9pm</div>
            <div className="Cornet">
              <p>+{entry.medications.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
