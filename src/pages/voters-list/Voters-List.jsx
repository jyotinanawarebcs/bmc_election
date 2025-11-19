import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Voters-List.css';
import Sidebar from "../../components/SideBar.jsx";
import HeaderBar from "../../components/HeaderBar.jsx";
import VoterHeader from "../../components/votersList/VoterHeader";
import SearchBar from "../../components/votersList/SearchBar";
import VoterListContainer from "../../components/votersList/VoterListContainer";

const voters = [
  { name: "उनडकर मौलिक मुकेश", part: "Part No: 1, Booth No: 1, Serial No: 1", avatarColor: "teal", label: "VOTER" },
  { name: "उनडकर हर्ष बिपीन", part: "Part No: 1, Booth No: 1, Serial No: 2", avatarColor: "darkcyan", label: "VOTER" },
  { name: "संघवी आदिती महेंद्र", part: "Part No: 1, Booth No: 1, Serial No: 3", avatarColor: "darkgreen", label: "VOTER" },
  { name: "उनडकट मुकेश नवीनभाई", part: "Part No: 1, Booth No: 1, Serial No: 4", avatarColor: "teal", label: "VOTER" },
  { name: "उनडकट उषा मुकेश", part: "Part No: 1, Booth No: 1, Serial No: 5", avatarColor: "peru", label: "VOTER" },
  { name: "उनडकट बिपिन नवीनभाई", part: "Part No: 1, Booth No: 1, Serial No: 6", avatarColor: "saddlebrown", label: "VOTER" }
];

export default function VoterList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleVoterClick = (voter) => {
    console.log("Clicked voter:", voter);
    navigate(`/voters-dashboard`);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      
      <HeaderBar
        title="Candidate Dashboard"
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar isOpen={sidebarOpen} />

      <div className="comparison-wrapper">
        <div className="voter-page">

          <VoterHeader total="94723" />

          <SearchBar />

          <VoterListContainer voters={voters} onClickVoter={handleVoterClick} />

        </div>
      </div>
    </div>
  );
}
