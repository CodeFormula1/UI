import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../modules/hompage/Homepage";
import ChampionshipSelect from "../modules/championship/Select";
import WECHomePage from "../modules/wec/HomePage";
import F1HomePage from "../modules/f1/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/race-select" element={<ChampionshipSelect />} />
        <Route path="/wec/*" element={<WECHomePage />} />
        <Route path="/f1/*" element={<F1HomePage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
