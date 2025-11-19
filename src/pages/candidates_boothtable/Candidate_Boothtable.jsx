import React, { useState } from "react";

import Sidebar from "../../components/SideBar.jsx";
import TopHeader from "../../components/candidate_dashboard1/TopHeader.jsx";
import StatsCards from "../../components/candidate_dashboard1/StatsCard.jsx";
import ActionTable from "../../components/candidate_dashboard1/Action_Table.jsx";
import BoothMap from "../../components/candidate_dashboard1/BoothMap.jsx";
import CandidateVsParty from "../../components/candidate_dashboard1/CandidatevsParty.jsx";
import BoothPerformance from "../../components/candidate_dashboard1/BoothPerformance.jsx";
import { useEffect } from "react";
import axios from "axios";
import "./Candidate_Boothtable.css";
import HeaderBar from "../../components/HeaderBar.jsx";

export default function CandidateDashboard1() {
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
           {/* Reusable Header */}
           <HeaderBar
             title="Candidate Dashboard"
             onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
           />
     
           {/* Reusable Sidebar */}
           <Sidebar isOpen={sidebarOpen} />
      
      <main className="main">
        <TopHeader 
        winner={{
            name: Winner.Candidate_Name,
            party: Winner.Party_Name,
            votes: Winner.Votes,
            percent: Winner.Vote_Share_Percentage,
            margin: Winner.Margin,
            marginPercent: Winner.Margin_Percentage,
          }}/>
        <StatsCards />
        <ActionTable />

        <div className="grid-2">
          {/* <BoothMap /> */}
          <CandidateVsParty />
        </div>

        <BoothPerformance />
      </main>
    </div>
  );
}
