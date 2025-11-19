import React from "react";
// import "./../styles/components.css";

export default function StatsCards() {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Votes</h4>
        <h2>8,45,672</h2>
      </div>

      <div className="stat-card">
        <h4>Overall Rank</h4>
        <h2>1st</h2>
      </div>

      <div className="stat-card positive">
        <h4>Winning Margin</h4>
        <h2>+1,12,845</h2>
      </div>

      <div className="stat-card">
        <h4>Vote Share %</h4>
        <h2>54.2%</h2>
      </div>
    </div>
  );
}
