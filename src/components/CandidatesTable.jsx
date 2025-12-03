import React from "react";

const candidates = [
  { rank: 1, name: "Priya Sharma", party: "Shiv Sena", votes: 45890, percent: 42.5, status: "Winner" },
  { rank: 2, name: "Rajesh Kumar", party: "Congress", votes: 40770, percent: 37.8, status: "Runner-up" },
  { rank: 3, name: "Amit Singh", party: "BJP", votes: 15110, percent: 14.0, status: "Lost" },
  { rank: 4, name: "Suresh Patel", party: "Independent", votes: 6120, percent: 5.7, status: "Lost" },
];

export default function CandidatesTable() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">All Candidates from Same Ward & Seat</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Rank</th>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Total Votes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.rank} className="border-b hover:bg-gray-50">
              <td className="py-2">{c.rank}</td>
              <td>{c.name}</td>
              <td>{c.party}</td>
              <td>{c.votes.toLocaleString()} ({c.percent}%)</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    c.status === "Winner"
                      ? "bg-green-100 text-green-700"
                      : c.status === "Runner-up"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
