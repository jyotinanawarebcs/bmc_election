import React from "react";
import "..\\src\\css\\WardResultScreen.css"; // optional external styling file

const partySymbols = {
  BJP: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png",
  Congress: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/800px-Hand_INC.svg.png",
  "Shiv Sena": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/1280px-Indian_Election_Symbol_Bow_And_Arrow.svg.png",
  NCP: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nationalist_Congress_Party_symbol.svg",
  SP: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png",
  MNS: "https://upload.wikimedia.org/wikipedia/en/9/9b/Maharashtra_Navnirman_Sena_logo.png",
};

const defaultSymbol = "https://upload.wikimedia.org/wikipedia/commons/3/3f/No_image_available_2.png";

const WardResultScreen = ({ clickedWardData, full2012Data, clickedWard, partyColors }) => {
  if (!clickedWardData) {
    return (
      <div className="ward-center">
        <p className="info-text">Select a ward to view details</p>
      </div>
    );
  }

  const candidates = [
    { label: "Winner", data: full2012Data[clickedWard]?.winner },
    { label: "2nd", data: full2012Data[clickedWard]?.runner1 },
    { label: "3rd", data: full2012Data[clickedWard]?.runner2 },
  ];

  return (
    <div className="ward-container">
      {candidates.map((candidate, index) => {
        const details = candidate.data || {};
        const party = details.party || "Independent";
        const votes = details.votes || 0;
        const symbol = partySymbols[party] || defaultSymbol;

        return (
          <div
            key={index}
            className={`ward-section ${index === 0 ? "winner" : index === 1 ? "second" : "third"}`}
          >
            <h2 className="ward-title">{candidate.label}</h2>

            <div className="ward-row">
              <img src={symbol} alt={party} className="ward-logo" />
              <div className="ward-details">
                <h3 className="ward-name">{details.Corporator || "—"}</h3>
                <p><strong>Caste:</strong> {details.Caste || "—"}</p>
                <p><strong>Ward No:</strong> {details.PRABHAG_NO || "—"}</p>
              </div>
            </div>

            <hr className="divider" />

            <p>
              <strong>Party:</strong>{" "}
              <span style={{ color: partyColors?.[party] || "#000" }}>{party}</span>
            </p>
            <p>
              <strong>Votes:</strong> {votes.toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WardResultScreen;
