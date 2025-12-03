import React from "react";

export default function WinnerCard() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Overall Winner</h2>
      <p className="text-sm text-gray-500 mb-1">
        Winner – Ward F/S, Seat 19
      </p>
      <h3 className="text-2xl font-bold text-green-700">Priya Sharma</h3>
      <p className="text-gray-600 mb-3">
        Shiv Sena · 45,890 Votes (Winning Margin: 5,120)
      </p>
      <p className="text-gray-500 text-sm">
        Priya Sharma secured a decisive victory with a strong voter turnout in key areas.
        Her campaign focused on infrastructure development and community engagement,
        resonating with a majority of the electorate.
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Detailed Report →
      </button>
    </section>
  );
}
