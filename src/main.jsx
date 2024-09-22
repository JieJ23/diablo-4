import { createRoot } from "react-dom/client";

import React from "react";
// import { DataProvider } from "./Hook/DataFetch.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Ladderboard from "./Pages/Ladderboard.jsx";

import About from "./Pages/About.jsx";

import PTR_TEST from "./Pages/PTR_TEST.jsx";

import Builds from "./Pages/Builds.jsx";
import Puzzle from "./Pages/Puzzle.jsx";
import Tools from "./Pages/Tools.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Cookies from "./Pages/Cookies.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";

import TestAssets from "./Pages/TestAssets.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DataProvider> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="/Ladderboard" element={<Ladderboard />} />
        <Route path="/PTR_TEST" element={<PTR_TEST />} />
        <Route path="/Builds" element={<Builds />} />
        <Route path="/Puzzle" element={<Puzzle />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/TestAssets" element={<TestAssets />} />
      </Routes>
    </Router>
    {/* </DataProvider> */}
  </React.StrictMode>
);
