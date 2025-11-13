import React from "react";

export default function AnalysisSection({ winnerName, winnerParty, wardName,voteMargin }) {
  return (
    <section className="analysis">
      <h4>
        Comparative Analysis:{" "}
        <span className="winner-name">{winnerName || "—"}</span>
      </h4>
      <p className="subtext">
        Ward: <strong>{wardName || "—"}</strong> | Party:{" "}
        <strong>{winnerParty || "—"}</strong>
      </p>

      <div className="cards">
        <div className="card">
          <h5>Vote Margin</h5>
          <p className="highlight">{voteMargin.toLocaleString()}</p>
          <p className="info">
            Margin increased by 1,200 votes in the final hours of counting
            compared to initial trends.
          </p>
        </div>

        <div className="card">
          <h5>Turnout % (Strong Areas)</h5>
          <p className="highlight blue">68.5%</p>
          <p className="info">
            Opponent’s strong areas saw a lower turnout of 61.2%, a key factor
            in the victory.
          </p>
        </div>

        <div className="card">
          <h5>Cross-Segment Correlation</h5>
          <p className="highlight orange">0.78</p>
          <p className="info">
            Strong positive correlation with youth voters (18–25), while the
            opponent had a higher correlation with seniors (60+).
          </p>
        </div>
      </div>
    </section>
  );
}
