import React, { useState } from "react";
import "./VotersPersonalDashboard.css";

// Reusable layout components
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";
// Persona components
import PersonaHeader from "../../components/voters-persona/PersonaHeader.jsx";
import PersonaCard from "../../components/voters-persona/PersonaCard.jsx";
import DemographicsCard from "../../components/voters-persona/DemographicsCard.jsx";
import PsychographicTraitsCard from "../../components/voters-persona/PsychographicTraitsCard.jsx";
import NeedsCard from "../../components/voters-persona/NeedsCard.jsx";
import GoalsCard from "../../components/voters-persona/GoalsCard.jsx";
import PainPointsCard from "../../components/voters-persona/PainPointsCard.jsx";
import BehavioralCharacteristicsCard from "../../components/voters-persona/BehavioralCharacteristicsCard.jsx";

const VoterPersonaDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* === Header with sidebar toggle === */}
      <HeaderBar
        title="Voter Persona Dashboard"
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* === Sidebar === */}
      <Sidebar isOpen={sidebarOpen} />

      {/* === Main Content === */}
      <main className="main-content">
        <PersonaHeader />

        <div className="dashboard-content">
          <div className="left-column">
            <DemographicsCard />
            <PsychographicTraitsCard />
            <PainPointsCard />
          </div>

          <div className="center-column">
            <PersonaCard />
          </div>

          <div className="right-column">
            <NeedsCard />
            <GoalsCard />
            <BehavioralCharacteristicsCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoterPersonaDashboard;
