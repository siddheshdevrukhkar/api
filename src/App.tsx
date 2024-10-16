import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProviderDetails from "./components/ProviderDetails";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<ProviderDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
