import React from "react";

export default function InsightsSection() {
  return (
    <section className="insights-section">
      <h3>Key Performance Insights</h3>
      <div className="insights-grid">
        <div>
          <h4>Top 5 Strongest Booths</h4>
          <ul>
            <li>Malabar Hill — +2.5%</li>
            <li>Cuffe Parade — +1.8%</li>
            <li>Worli Seaface — -0.5%</li>
            <li>Colaba — +4.2%</li>
            <li>Tardeo — +3.1%</li>
          </ul>
        </div>

        <div>
          <h4>Narrowest Margins</h4>
          <ul>
            <li>Byculla — Lost by 212 votes</li>
            <li>Mazgaon — Won by 345 votes</li>
            <li>Nagpada — Lost by 401 votes</li>
          </ul>
        </div>

        <div>
          <h4>Highest Voter Participation</h4>
          <ul>
            <li>Colaba — 72.5%</li>
            <li>Malabar Hill — 70.1%</li>
            <li>Tardeo — 68.9%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
