import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">🗳️ BMC Election 2027 Dashboard</h1>
      <nav className="nav">
        <a href="#">Dashboard</a>
        <a href="#">Wards</a>
        <a href="#">Candidates</a>
        <a href="#">Reports</a>
      </nav>
    </header>
  );
}
