import React from "react";

export default function VoterHeader({ total }) {
  return (
    <header className="header">
      <h1 className="header-title">Total - {total}, All</h1>
    </header>
  );
}
