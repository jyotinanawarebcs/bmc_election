import React from "react";
import winnerImg from "../../assets/profile.webp";

export default function WinnerSection({ winner = {} }) {
  const {
    name = "—",
    party = "—",
    votes = 0,
  } = winner;

  return (
    <section className="winner-section">
      <div className="winner-text">
        <p className="winner-title">Winner - Ward F/S, Seat 19</p>
        <h3>{name}</h3>
        <p className="party-info">
          {party} • {votes.toLocaleString()} Votes (Winning Margin: —)
        </p>
        <p className="desc">
          {name !== "—"
            ? `${name} secured a decisive victory with a strong voter turnout in key areas.`
            : "Winner details are loading..."}
        </p>
        <button disabled={name === "—"}>View Detailed Report →</button>
      </div>
      <img src={winnerImg} alt="Winner" className="winner-img" />
    </section>
  );
}
