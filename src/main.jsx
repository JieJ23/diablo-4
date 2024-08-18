import { createRoot } from "react-dom/client";

import React from "react";
import { DataProvider } from "./Hook/DataFetch.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import TestAssets from "./Pages/TestAssets.jsx";
import Builds from "./Pages/Builds.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/TestAssets" element={<TestAssets />} />
          <Route path="/Builds" element={<Builds />} />
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);
