// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Candidate_Dash from "./pages/candidate_dashboard/Candidate_Dash";
import Candidate_Overview from "./pages/candidate-overview/Candidate_Overview";
import VoterPersonaDashboard from "./pages/voters-persona/VotersPersonalDashboard";


function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Candidate_dash</Link></li>
            <li><Link to="/dashboard">Candidate_dash</Link></li>

          </ul> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate-dashboard" element={<Candidate_Dash />} />
          <Route path="/candidate-overview" element={<Candidate_Overview />} />
          <Route path="/voters-persona" element={<VoterPersonaDashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
