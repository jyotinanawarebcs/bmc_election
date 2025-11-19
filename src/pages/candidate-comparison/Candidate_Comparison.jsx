import React from "react";
import { useState } from "react";

import "./Candidate_Comparison.css";
import profileImg from '../../assets/profile.webp';
import Sidebar from "../../components/SideBar.jsx";
import HeaderBar from "../../components/HeaderBar.jsx";


export default function CandidateComparison() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const candidates = [
    {
      title: "WINNER",
      name: "Priya Sharma",
      party: "Bharatiya Janata Party",
      img: "/images/priya.png",
      rank: "1st",
      votes: "32,450",
      voteShare: "42.5%",
      margin: "+4,330",
      score: "88 / 100",
      scoreLabel: "Excellent Efficacy",
      turnoutStrong: "78%",
      voteSwing: "52%",
      support: "High",
      visits: "5.2",
      social: "8.9/10",
      volunteers: "1,250",
      prevRank: "1st",
      prevShare: "39.8%",
      highBooths: "45",
      strongBooths: "82",
      weakBooths: "15",
    },
    {
      title: "1st RUNNER-UP",
      name: "Rohan Mehta",
      party: "Shiv Sena (UBT)",
      img: "/images/rohan.png",
      rank: "2nd",
      votes: "28,120",
      voteShare: "36.8%",
      margin: "-4,330",
      score: "75 / 100",
      scoreLabel: "Good",
      turnoutStrong: "75%",
      voteSwing: "45%",
      support: "Moderate",
      visits: "4.8",
      social: "8.2/10",
      volunteers: "1,100",
      prevRank: "3rd",
      prevShare: "25.1%",
      highBooths: "42",
      strongBooths: "75",
      weakBooths: "28",
    },
    {
      title: "2nd RUNNER-UP",
      name: "Anjali Singh",
      party: "Indian National Congress",
      img: "/images/anjali.png",
      rank: "3rd",
      votes: "15,670",
      voteShare: "20.5%",
      margin: "-16,780",
      score: "62 / 100",
      scoreLabel: "Average",
      turnoutStrong: "69%",
      voteSwing: "3%",
      support: "High",
      visits: "3.5",
      social: "6.5/10",
      volunteers: "850",
      prevRank: "N/A",
      prevShare: "N/A",
      highBooths: "33",
      strongBooths: "41",
      weakBooths: "55",
    },
  ];

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
               {/* Reusable Header */}
               <HeaderBar
                 title="Candidate Dashboard"
                 onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
               />
         
               {/* Reusable Sidebar */}
               <Sidebar isOpen={sidebarOpen} />
    <div className="comparison-wrapper">
      <h2 className="title">Candidate Comparison</h2>
      <div className="subtitle">Ward 78, Andheri East</div>

      {/* Header Cards */}
      <div className="candidate-header-row">
        {candidates.map((c, idx) => (
          <div className="candidate-card" key={idx}>
            <div className="tag">{c.title}</div>
            <img className="avatar" src={profileImg} alt="candidate" />
            <div className="name">{c.name}</div>
            <div className="party">{c.party}</div>
          </div>
        ))}
      </div>

      {/* Table Sections */}
      <div className="section-title">Performance Overview</div>
      <div className="table">
        {[
          ["Overall Rank", "rank"],
          ["Total Votes", "votes"],
          ["Vote Share (%)", "voteShare"],
          ["Margin", "margin"],
          ["Performance Score", "score"],
        ].map(([label, field], i) => (
          <div className="row" key={i}>
            <div className="cell label">{label}</div>
            {candidates.map((c, j) => (
              <div className="cell" key={j}>
                {c[field]}
                {field === "score" && (
                  <div className="subtext">{c.scoreLabel}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Demographic Reach */}
      <div className="section-title">Demographic Reach</div>
      <div className="table">
        {[
          ["Avg. Turnout in Strong Booths", "turnoutStrong"],
          ["Vote Share in Swing Booths", "voteSwing"],
          ["Support in Key Communities", "support"],
        ].map(([label, field]) => (
          <div className="row" key={field}>
            <div className="cell label">{label}</div>
            {candidates.map((c, j) => (
              <div className="cell" key={j}>{c[field]}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Campaign & Outreach */}
      <div className="section-title">Campaign & Outreach</div>
      <div className="table">
        {[
          ["Avg. Campaign Visits per Booth", "visits"],
          ["Social Media Engagement", "social"],
          ["Active Volunteers", "volunteers"],
        ].map(([label, field]) => (
          <div className="row" key={field}>
            <div className="cell label">{label}</div>
            {candidates.map((c, j) => (
              <div className="cell" key={j}>{c[field]}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Historical Context */}
      <div className="section-title">Historical Context</div>
      <div className="table">
        {[
          ["Previous Election Rank", "prevRank"],
          ["Previous Election Vote Share", "prevShare"],
        ].map(([label, field]) => (
          <div className="row" key={field}>
            <div className="cell label">{label}</div>
            {candidates.map((c, j) => (
              <div className="cell" key={j}>{c[field]}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Booth-Level Strengths */}
      <div className="section-title">Booth-Level Strengths</div>
      <div className="table">
        {[
          ["# of High Potential Booths", "highBooths"],
          ["# of Strong Booths", "strongBooths"],
          ["# of Weak Booths", "weakBooths"],
        ].map(([label, field]) => (
          <div className="row" key={field}>
            <div className="cell label">{label}</div>
            {candidates.map((c, j) => (
              <div className="cell" key={j}>{c[field]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
