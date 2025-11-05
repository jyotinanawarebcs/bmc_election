import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WardResultScreen from './candidate-page/WardResultScreen.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/candidate-page/:wardId" element={<WardResultScreen />} />
    </Routes>
  </BrowserRouter>
);
