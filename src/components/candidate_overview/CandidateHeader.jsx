import React from "react";

export default function CandidateHeader({ winner = {} }) {
  const {
    name = "—",
    party = "—",
    votes = 0,
    margin = 0,
    marginPercent = 0,
  } = winner;

  return (
    <header className="candidate-header">
      <div>
        <h1>{name}</h1>
        <p>{party}</p>
        <p className="subtext">Mumbai South Constituency</p>
      </div>
      <div className="header-actions">
        <button className="btn-outline">Compare</button>
        <button className="btn">Print Report</button>
      </div>
    </header>
  );
}
