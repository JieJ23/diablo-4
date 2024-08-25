import { createRoot } from "react-dom/client";

import React from "react";
import { DataProvider } from "./Hook/DataFetch.jsx";
import { DataProvider2 } from "./Hook/DuoDateFetch.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Ladderboard from "./Pages/Ladderboard.jsx";
import DuoLadderboard from "./Pages/DuoLadder.jsx";

import Builds from "./Pages/Builds.jsx";
import Puzzle from "./Pages/Puzzle.jsx";
import TestAssets from "./Pages/TestAssets.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <DataProvider2>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Ladderboard" element={<Ladderboard />} />
            <Route path="/DuoLadderboard" element={<DuoLadderboard />} />
            <Route path="/Builds" element={<Builds />} />
            <Route path="/Puzzle" element={<Puzzle />} />
            <Route path="/TestAssets" element={<TestAssets />} />
          </Routes>
        </Router>
      </DataProvider2>
    </DataProvider>
  </React.StrictMode>
);
