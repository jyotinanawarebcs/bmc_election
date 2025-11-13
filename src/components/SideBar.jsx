import React from "react";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router-dom"; // 👈 Import NavLink
import "./SideBar.css";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>BMC Elections 2027</h2>
        <p>Analytics Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/candidate-overview" activeclassname="active">
              Candidate Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/candidate-dashboard" activeclassname="active">
              Candidate Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/voters-persona" activeclassname="active">
              Voters Persona
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="export-btn">
          <FiDownload /> Export Data
        </button>
        <div className="help-links">
          <p>Help</p>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}
