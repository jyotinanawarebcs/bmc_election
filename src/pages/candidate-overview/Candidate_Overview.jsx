import React, { useState } from "react";
import "./Candidate_Overview.css";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/SideBar";
import { useEffect } from "react";
import axios from "axios";
import CandidateHeader from "../../components/candidate_overview/CandidateHeader";

export default function Candidate_Overview() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/candidates/")
      .then((res) => {
        // Sort wards numerically by Ward_No
        const sortedData = res.data.sort((a, b) => Number(a.Ward_No) - Number(b.Ward_No));
        setWards(sortedData);


        
        if (res.data.length > 0) setSelectedWard(res.data[0]); // default: first ward
      })
      .catch((err) => console.error("Error fetching candidate data:", err));
  }, []);

  if (!selectedWard) return <div>Loading...</div>;
  
  const { Winner, Candidates, Ward_Name } = selectedWard;

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Reusable Header */}
      <HeaderBar
        title="Candidate Overview"
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Reusable Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* === Main Content === */}
      <main className="main-content">
        <CandidateHeader
          winner={{
            name: Winner.Candidate_Name,
            party: Winner.Party_Name,
            votes: Winner.Votes,
            percent: Winner.Vote_Share_Percentage,
            margin: Winner.Margin,
            marginPercent: Winner.Margin_Percentage,
          }}/>
        {/* Summary Section */}
        <section className="summary-section">
          <h3>Summary Differences vs. Arvind Sawant (SHS)</h3>
          <div className="summary-grid">
            <SummaryCard label="Vote Share Lead" value="+8.4%" positive />
            <SummaryCard
              label="Lead in Strongholds"
              value="+3 booths"
              positive
            />
            <SummaryCard label="Turnout in Key Booths" value="-1.2%" />
            <SummaryCard
              label="Swing Booths Won"
              value="4 of 7 (57%)"
              positive
            />
          </div>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          <StatCard label="Total Votes" value="8,45,672" />
          <StatCard label="Overall Rank" value="1st" />
          <StatCard label="Winning Margin" value="+1,12,845" positive />
          <StatCard label="Vote Share %" value="54.2%" />
        </section>

        {/* Action Tracking */}
        <section className="action-tracking">
          <div className="section-header">
            <h3>Action Tracking</h3>
            <span className="overdue">2 Overdue</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Action Item</th>
                <th>Assigned To</th>
                <th>Target Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <TaskRow
                task="Deploy intensive door-to-door campaign in Byculla."
                assignee="Anil Gupta"
                date="2024-05-15"
                status="In Progress"
              />
              <TaskRow
                task="Organize rally in Malabar Hill."
                assignee="Sunita Rao"
                date="2024-05-20"
                status="Completed"
              />
              <TaskRow
                task="Distribute pamphlets in Cuffe Parade."
                assignee="Ravi Sharma"
                date="2024-05-25"
                status="In Progress"
              />
              <TaskRow
                task="Social media push for Tardeo booth."
                assignee="Priya Singh"
                date="2024-05-18"
                status="Not Started"
              />
              <TaskRow
                task="Voter registration drive in Colaba."
                assignee="Team B"
                date="2024-06-01"
                status="Not Started"
              />
            </tbody>
          </table>
        </section>

        {/* Map Placeholder */}
        {/* <section className="map-section">
          <h3>Booth Classification Map</h3>
          <div className="map-placeholder">[Map Placeholder]</div>
        </section> */}

        {/* Insights */}
        <section className="insights-section">
          <h3>Key Performance Insights</h3>
          <div className="insights-grid">
            <div>
              <h4>Top 5 Strongest Booths</h4>
              <ul>
                <li>Malabar Hill — +2.5%</li>
                <li>Cuffe Parade — +1.8%</li>
                <li>Worli Seaface — -0.5%</li>
                <li>Colaba — +4.2%</li>
                <li>Tardeo — +3.1%</li>
              </ul>
            </div>
            <div>
              <h4>Narrowest Margins</h4>
              <ul>
                <li>Byculla — Lost by 212 votes</li>
                <li>Mazgaon — Won by 345 votes</li>
                <li>Nagpada — Lost by 401 votes</li>
              </ul>
            </div>
            <div>
              <h4>Highest Voter Participation</h4>
              <ul>
                <li>Colaba — 72.5%</li>
                <li>Malabar Hill — 70.1%</li>
                <li>Tardeo — 68.9%</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// === Subcomponents ===
function SummaryCard({ label, value, positive }) {
  return (
    <div className="summary-card">
      <p>{label}</p>
      <h4 className={positive ? "positive" : "negative"}>{value}</h4>
    </div>
  );
}

function StatCard({ label, value, positive }) {
  return (
    <div className="stat-card">
      <p>{label}</p>
      <h3 className={positive ? "positive" : ""}>{value}</h3>
    </div>
  );
}

function TaskRow({ task, assignee, date, status }) {
  return (
    <tr>
      <td>{task}</td>
      <td>{assignee}</td>
      <td>{date}</td>
      <td>
        <span className={`status ${status.replace(" ", "-").toLowerCase()}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
