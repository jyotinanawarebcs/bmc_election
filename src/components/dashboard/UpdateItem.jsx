import React from "react";

export default function UpdateItem({ icon, title, time, detail }) {
  return (
    <div className="update-item">
      <div className="update-icon">{icon}</div>

      <div className="update-content">
        <p className="update-title">{title}</p>
        <p className="update-time">{time}</p>
        <p className="update-detail">{detail}</p>

        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
}
