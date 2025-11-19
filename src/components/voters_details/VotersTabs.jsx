import React from "react";

export default function VoterTabs({ navigate }) {
  return (
    <div className="tabs">
      <button className="tab active">माहिती</button>
      <button className="tab" onClick={() => navigate('/voters-family')}>
        कुटुंब
      </button>
      <button className="tab">सर्व</button>
    </div>
  );
}
