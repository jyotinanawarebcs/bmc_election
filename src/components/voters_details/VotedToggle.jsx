import React from "react";

export default function VotedToggle() {
  return (
    <div className="voted-toggle">
      <span>Voted</span>
      <label className="toggle-switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}
