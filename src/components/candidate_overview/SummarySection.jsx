import React from "react";
import SummaryCard from "./SummaryCard";

export default function SummarySection() {
  return (
    <section className="summary-section">
      <h3>Summary Differences vs. Arvind Sawant (SHS)</h3>
      <div className="summary-grid">
        <SummaryCard label="Vote Share Lead" value="+8.4%" positive />
        <SummaryCard label="Lead in Strongholds" value="+3 booths" positive />
        <SummaryCard label="Turnout in Key Booths" value="-1.2%" />
        <SummaryCard label="Swing Booths Won" value="4 of 7 (57%)" positive />
      </div>
    </section>
  );
}
