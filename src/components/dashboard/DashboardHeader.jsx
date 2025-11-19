import React from "react";

export default function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="dashboard-title">Mumbai Election</h1>
      </div>
      <div className="header-right">{/* Add search or profile here */}</div>
    </header>
  );
}
