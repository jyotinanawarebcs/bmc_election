import React from "react";
import VoterActions from "./VoterActions";

export default function VoterCard({ voter, onClick }) {
  return (
    <div className="voter-card" onClick={onClick}>
      <div className="voter-info">
        <div className={`avatar avatar-${voter.avatarColor}`}>
          {voter.label && <span className="voter-label">{voter.label}</span>}
        </div>

        <div className="voter-details">
          <h3 className="voter-name">{voter.name}</h3>
          <p className="voter-part">{voter.part}</p>
        </div>
      </div>

      <VoterActions />
    </div>
  );
}
