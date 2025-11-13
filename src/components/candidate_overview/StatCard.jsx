import React from "react";

export default function StatCard({ label, value, positive }) {
  return (
    <div className="stat-card">
      <p>{label}</p>
      <h3 className={positive ? "positive" : ""}>{value}</h3>
    </div>
  );
}
