import React from "react";
import { Routes, Route } from "react-router-dom";
import Races from "../races/Races";
import Standings from "../standings/Standings";
import Models from "../models/Models";

const WECRoutes = () => {
  return (
    <Routes>
      {/* Define nested routes here as needed */}
      <Route path="/" element={<Races />} />
      <Route path="/races" element={<Races />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/models/*" element={<Models />} />
    </Routes>
  );
};

export default WECRoutes;
