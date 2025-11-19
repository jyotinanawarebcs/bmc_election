import React from "react";
// import "./../styles/components.css";
import profileImg from '../../assets/profile.webp';

export default function TopHeader({ winner = {} }) {
  const {
    name = "—",
    party = "—",
    votes = 0,
    margin = 0,
    marginPercent = 0,
  } = winner;

  return (
    <div className="top-header1">
      <div className="profile">
        <img
          src={profileImg}
          alt="Profile"
          className="avatar"
        />
        <div>
          <h2>{name}</h2>
          <p>{party}</p>
          <p className="light-text">Mumbai South Constituency</p>
        </div>
      </div>

      <button className="print-btn">Print Report</button>
    </div>
  );
}
