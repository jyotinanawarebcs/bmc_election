import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm flex justify-between items-center px-6 py-3">
      <h1 className="text-xl font-semibold text-blue-800">BMC Election 2027 Dashboard</h1>
      <nav className="space-x-6 text-gray-600">
        <a href="#" className="font-medium text-blue-600">Dashboard</a>
        <a href="#">Wards</a>
        <a href="#">Candidates</a>
        <a href="#">Reports</a>
      </nav>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </header>
  );
}
