import React from "react";
import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section className="stats-grid">
      <StatCard label="Total Votes" value="8,45,672" />
      <StatCard label="Overall Rank" value="1st" />
      <StatCard label="Winning Margin" value="+1,12,845" positive />
      <StatCard label="Vote Share %" value="54.2%" />
    </section>
  );
}
