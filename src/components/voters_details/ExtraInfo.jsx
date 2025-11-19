import React from "react";

export default function ExtraInfo() {
  return (
    <div className="extra-info">
      <div className="info-row">
        <span>मतदान केंद्र</span>
        <span>0 -</span>
      </div>

      <div className="info-row mobile-row">
        <span>मोबाइल -1</span>

        <div className="mobile-actions">
          <div className="edit-icon">✎</div>
          <div className="copy-icon">□</div>
          <div className="percent">2%</div>
        </div>
      </div>
    </div>
  );
}
