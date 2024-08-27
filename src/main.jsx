import { createRoot } from "react-dom/client";

import React from "react";
import { DataProvider } from "./Hook/DataFetch.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Ladderboard from "./Pages/Ladderboard.jsx";

import Builds from "./Pages/Builds.jsx";
import Puzzle from "./Pages/Puzzle.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Ladderboard" element={<Ladderboard />} />
          <Route path="/Builds" element={<Builds />} />
          <Route path="/Puzzle" element={<Puzzle />} />
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);
