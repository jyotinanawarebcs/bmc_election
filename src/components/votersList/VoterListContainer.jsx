import React from "react";
import VoterCard from "./VoterCard";

export default function VoterListContainer({ voters, onClickVoter }) {
  return (
    <div className="voter-list">
      {voters.map((voter, index) => (
        <VoterCard
          key={index}
          voter={voter}
          onClick={() => onClickVoter(voter)}
        />
      ))}
    </div>
  );
}
