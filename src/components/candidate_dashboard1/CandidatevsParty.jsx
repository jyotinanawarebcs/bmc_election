import React from "react";
// import "./../styles/components.css";

export default function CandidateVsParty() {
  const data = [
    { booth: "Malabar Hill", candidate: 60, party: 40 },
    { booth: "Cuffe Parade", candidate: 58, party: 42 },
    { booth: "Colaba", candidate: 50, party: 50 },
    { booth: "Worli Seaface", candidate: 56, party: 44 },
    { booth: "Tardeo", candidate: 47, party: 53 },
  ];

  return (
    <div className="side-card">
      <h3>Candidate vs Party Performance</h3>
      {data.map((row) => (
        <div key={row.booth} className="performance-row">
          <strong>{row.booth}</strong>
          <div className="bars">
            <div className="candidate-bar" style={{ width: row.candidate + "%" }}></div>
            <div className="party-bar" style={{ width: row.party + "%" }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
