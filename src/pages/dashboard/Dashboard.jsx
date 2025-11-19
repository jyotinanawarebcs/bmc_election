import React, { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import OverviewStats from "../../components/dashboard/OverviewStats";
import RecentUpdates from "../../components/dashboard/RecentUpdates";
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-container1 ${sidebarOpen ? "sidebar-open" : ""}`}>

      <HeaderBar
        title="Home"
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar isOpen={sidebarOpen} />

      <div className="dashboard-content1">
        
        <DashboardHeader />

        <OverviewStats />

        <RecentUpdates />

      </div>
    </div>
  );
};

export default Dashboard;
