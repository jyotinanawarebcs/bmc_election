import React from "react";
import { FiMenu } from "react-icons/fi";
import "./HeaderBar.css";

export default function HeaderBar({ title, onToggleSidebar }) {
  return (
    <header className="top-header">
      <button className="sidebar-toggle" onClick={onToggleSidebar}>
        <FiMenu />
      </button>
      <h2>{title}</h2>
    </header>
  );
}
