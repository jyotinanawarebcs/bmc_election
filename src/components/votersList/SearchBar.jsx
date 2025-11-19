import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input type="text" placeholder="Search Voters" className="search-input" />
      </div>
    </div>
  );
}
