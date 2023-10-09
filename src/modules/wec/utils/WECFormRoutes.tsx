import React from "react";
import { Routes, Route } from "react-router-dom";
import TyreDegCal from "../models/tyreDegCalculations/TyreDegCal";
import ReinforcementLearning from "../models/reinforcementLearning/ReinforcementLearning";
import MonteCarloSimulation from "../models/monteCarloSimulation/MonteCarloSimulation";
import PitStopLoss from "../models/tyreDegCalculations/PitStopLoss";
import AvgLapNumber from "../models/tyreDegCalculations/AvgLapNumber";
import AvgTyrePace from "../models/tyreDegCalculations/AvgTyrePace";
import DegNewTyre from "../models/tyreDegCalculations/DegNewTyre";


const WECFormRoutes = () => {
  return (
    <Routes>
      {/* Define nested routes here as needed */}
      <Route path="/" element={<TyreDegCal />} />
      <Route path="/tyre-deg-calculations" element={<TyreDegCal />} />
      <Route path="/pit-stop-loss" element={<PitStopLoss />} />
      <Route path="/avg-lap-number" element={<AvgLapNumber />} />
      <Route path="/avg-tyre-pace" element={<AvgTyrePace />} />
      <Route path="/deg-new-tyre" element={<DegNewTyre />} />
      <Route path="/monte-carlo" element={<MonteCarloSimulation />} />
      <Route path="/reinforcement-learning" element={<ReinforcementLearning />} />
    </Routes>
  );
};

export default WECFormRoutes;