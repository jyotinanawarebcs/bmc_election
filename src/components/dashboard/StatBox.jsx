import React from "react";

export default function StatBox({ label, value, time }) {
  return (
    <div className="stat-box">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-time">{time}</p>
    </div>
  );
}
