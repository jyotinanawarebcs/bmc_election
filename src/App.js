// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Candidate_Dash from "./pages/candidate_dashboard/Candidate_Dash";
import Candidate_Overview from "./pages/candidate-overview/Candidate_Overview";
import VoterPersonaDashboard from "./pages/voters-persona/VotersPersonalDashboard";
import CandidateDashboard1 from "./pages/candidates_boothtable/Candidate_Boothtable";
import CandidateComparison from "./pages/candidate-comparison/Candidate_Comparison";
import VoterDetails from "./pages/Voters_details/Voters-details";
import FamilyList from "./pages/voters-family/Voters-Family";
import VoterList from "./pages/voters-list/Voters-List";
import VoterDetail from "./pages/Voters_details/Voters-details";


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
          <Route path="/" element={<Dashboard />} />
          <Route path="/candidate-dashboard" element={<Candidate_Dash />} />
          <Route path="/candidate-overview" element={<Candidate_Overview />} />
          <Route path="/voters-persona" element={<VoterPersonaDashboard />} />
          <Route path="/candidate-dashboard1" element={<CandidateDashboard1 />} />
          <Route path="/candidate-comparison" element={<CandidateComparison />} />
          <Route path="/voters-dashboard" element={<VoterDetails />} />
          <Route path="/voters-family" element={<FamilyList />} />
          <Route path="/voters-list" element={<VoterList />} />
          <Route path="/voters-details" element={<VoterDetail />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
