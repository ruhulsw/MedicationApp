import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import MedicationList from "./Components/MedicationList";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medication-list" element={<MedicationList />} />
      </Routes>
    </Router>
  );
};

export default App;
