import React from "react";
// import "./../styles/components.css";

export default function BoothMap() {
  return (
    <div className="map-card">
      <h3>Booth Classification Map</h3>

      <div className="map-placeholder">
        (Map Illustration Placeholder)
      </div>

      <div className="legend">
        <span className="dot green"></span> High Potential  
        <span className="dot yellow"></span> Opportunity Booth  
        <span className="dot orange"></span> Swing Booth  
        <span className="dot red"></span> Strong for Runner-up  
        <span className="dot grey"></span> Weak Booth  
      </div>
    </div>
  );
}
