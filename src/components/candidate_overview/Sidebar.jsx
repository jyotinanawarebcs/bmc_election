import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>BMC Elections 2027</h2>
        <p>Analytics Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="active">Dashboard</li>
          <li>Constituencies</li>
          <li>Candidates</li>
          <li>Reports</li>
          <li>Settings</li>
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
