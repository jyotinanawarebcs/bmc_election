import React from "react";

export default function SummaryCard({ label, value, positive }) {
  return (
    <div className="summary-card">
      <p>{label}</p>
      <h4 className={positive ? "positive" : "negative"}>{value}</h4>
    </div>
  );
}
