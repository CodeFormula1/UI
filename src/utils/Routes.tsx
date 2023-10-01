import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../modules/hompage/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
