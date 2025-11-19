import React from "react";

export default function CandidateTable({ candidates }) {
  if (!candidates || candidates.length === 0) {
    // Remove duplicates by Candidate_Name (so even if parent passes twice, you only see once)
    const uniqueCandidates = Array.from(
      new Map(candidates.map(c => [c.Candidate_Name, c])).values()
    );

    // Filter out the winner (Position = 1)
    const otherCandidates = uniqueCandidates.filter(c => parseInt(c.Position) !== 1);

    return (
      <section className="candidates">
        <h4>All Candidates from Same Ward & Seat</h4>
        <p>No candidates data available.</p>
      </section>
    );
  }
  

  // Filter out the winner (Position = 1)
  const otherCandidates = candidates.filter(c => parseInt(c.Position) !== 1);

  return (
    <section className="candidates">
      <h4>All Candidates from Same Ward & Seat</h4>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Total Votes</th>
            <th>Vote %</th>
          </tr>
        </thead>
        <tbody>
          {otherCandidates.map((c, index) => (
            <tr key={index}>
              <td>{c.Position}</td>
              <td>{c.Candidate_Name || "—"}</td>
              <td>{c.Party_Name || "—"}</td>
              <td>{c.Votes?.toLocaleString() || 0}</td>
              <td>{c.Vote_Share_Percentage || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
