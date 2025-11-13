import React from "react";

export default function CandidateHeader() {
  return (
    <header className="candidate-header">
      <div>
        <h1>Priya Dutt</h1>
        <p>Indian National Congress (INC)</p>
        <p className="subtext">Mumbai South Constituency</p>
      </div>
      <div className="header-actions">
        <button className="btn-outline">Compare</button>
        <button className="btn">Print Report</button>
      </div>
    </header>
  );
}
