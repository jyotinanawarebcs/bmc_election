import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App,{ full2012Data, partyColors } from "./App";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WardResultScreen from './candidate-page/WardResultScreen.js';
import MumbaiSeatsPage from "./party-page/PartyStatsPage.js";
import PopulationPage from "./population-page/PopulationCardPage.js";
import PartyDetailsPage from "./party-page/Partystats.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/candidate-page/:wardId"
        element={
          <WardResultScreen
            full2012Data={full2012Data}
            partyColors={partyColors}
          />
        }
      />
      <Route path="/mumbai-seats" element={<MumbaiSeatsPage />} />
      <Route path="/party-details/:partyName" element={<PartyDetailsPage />} />
      <Route path="/population-page" element={<PopulationPage />} />
    </Routes>
  </BrowserRouter>
);
