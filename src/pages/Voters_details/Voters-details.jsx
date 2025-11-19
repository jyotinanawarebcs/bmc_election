import './Voters-details.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";
import VoterTabs from "../../components/voters_details/VotersTabs";
import ProfileCard from "../../components/voters_details/ProfileCard";
import DetailsTable from "../../components/voters_details/DetailsTable";
import ExtraInfo from "../../components/voters_details/ExtraInfo";
import ColorCodeSection from "../../components/voters_details/ColorCodeSection";
import VotedToggle from "../../components/voters_details/VotedToggle";
import ActionButtons from "../../components/voters_details/ActionButtons";
import BottomFullButton from "../../components/voters_details/BottomFullButton";

export default function VoterDetail() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={`dashboard-container2 ${sidebarOpen ? "sidebar-open" : ""}`}>

      <HeaderBar
        title="Home"
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar isOpen={sidebarOpen} />

      <div className="dashboard-content2">
        <div className="voter-detail-page">

          <VoterTabs navigate={navigate} />

          <ProfileCard />

          <DetailsTable />

          <ExtraInfo />

          <ColorCodeSection />

          <VotedToggle />

          <ActionButtons />

          <BottomFullButton />

        </div>
      </div>
    </div>
  );
}
