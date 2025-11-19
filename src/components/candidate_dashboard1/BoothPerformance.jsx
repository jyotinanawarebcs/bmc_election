import React from "react";
// import "..\pages\candidates_boothtable\Candidate_Boothtable.jsx"

export default function BoothPerformance() {
  const data = [
    ["Malabar Hill", "High Potential", 9210, 15350, "60.0%"],
    ["Cuffe Parade", "High Potential", 8534, 14800, "57.6%"],
    ["Colaba", "Opportunity", 8102, 16204, "50.0%"],
    ["Worli Seaface", "High Potential", 7855, 13991, "56.1%"],
    ["Tardeo", "Opportunity", 7041, 15012, "46.9%"],
  ];

  return (
    <div className="table-card">
      <h3>Complete Booth Performance</h3>

      <table>
        <thead>
          <tr>
            <th>Booth Name</th>
            <th>Classification</th>
            <th>Candidate Votes</th>
            <th>Total Votes</th>
            <th>Share %</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r[0]}</td>
              <td><span className="tag">{r[1]}</span></td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
