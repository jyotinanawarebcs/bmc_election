import React, { useState } from "react";
import "./Candidate_Dash.css";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";
import Filters from "../../components/candidate_dashboard/Filters.jsx";
import WinnerSection from "../../components/candidate_dashboard/WinnerSection.jsx";
import CandidateTable from "../../components/candidate_dashboard/CandidateTable.jsx";
import AnalysisSection from "../../components/candidate_dashboard/AnalysisSection.jsx";
import { useEffect } from "react";
import axios from "axios";

export default function BmcElectionDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/candidates/")
      .then((res) => {
        // Sort wards numerically by Ward_No
        const sortedData = res.data.sort((a, b) => Number(a.Ward_No) - Number(b.Ward_No));
        setWards(sortedData);


        if (res.data.length > 0) setSelectedWard(res.data[0]); // default: first ward
      })
      .catch((err) => console.error("Error fetching candidate data:", err));
  }, []);

  if (!selectedWard) return <div>Loading...</div>;
  
  const { Winner, Candidates, Ward_Name } = selectedWard;

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <HeaderBar
        title={`Candidate Dashboard – ${Ward_Name}`}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar isOpen={sidebarOpen} />

      <main className="main-content">
        <Filters />

        <WinnerSection
          winner={{
            name: Winner.Candidate_Name,
            party: Winner.Party_Name,
            votes: Winner.Votes,
            percent: Winner.Vote_Share_Percentage,
            margin: Winner.Margin,
            marginPercent: Winner.Margin_Percentage,
          }}
        />

        {/* Filter out winner from candidates table */}
        <CandidateTable
          candidates={Candidates.filter(
            (c) => c.Candidate_Name !== Winner.Candidate_Name
          )}
        />

        <AnalysisSection
          winnerName={Winner.Candidate_Name}
          winnerParty={Winner.Party_Name}
          wardName={Ward_Name}
          voteMargin={Winner.Margin}
          marginPercent={Winner.Margin_Percentage}
        />
      </main>
    </div>
  );
}
