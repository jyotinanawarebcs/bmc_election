import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../css/PartyStatsPage.css";

const PartyStatsPage = () => {
  const navigate = useNavigate();

  const totalSeats = 227;

  const partyData = [
    {
      name: "BJP",
      seats: 57,
      color: "#f77f00",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png",
    },
    {
      name: "Shiv Sena",
      seats: 39,
      color: "#ff8800",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/1280px-Indian_Election_Symbol_Bow_And_Arrow.svg.png",
    },
    {
      name: "Congress",
      seats: 13,
      color: "#2a9d8f",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/800px-Hand_INC.svg.png",
    },
    {
      name: "SP",
      seats: 3,
      color: "#e63946",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png",
    },
    {
      name: "NCP",
      seats: 2,
      color: "#0077b6",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Nationalist_Congress_Party_Election_Symbol.png",
    },
    {
      name: "NOTA",
      seats: 0,
      color: "#adb5bd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NOTA_Option_Logo.svg/1200px-NOTA_Option_Logo.svg.png",
    },
    {
      name: "Others",
      seats: 0,
      color: "#6c757d",
      logo: "https://static.vecteezy.com/system/resources/previews/032/176/017/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    },
  ];

  const COLORS = partyData.map((p) => p.color);

  return (
    <div className="party-stats-page">
      {/* Header */}
      <div className="party-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Mumbai Party-wise Seat Statistics</h1>
      </div>

      {/* Top Summary */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Seats</h3>
          <h2>{totalSeats}</h2>
        </div>
        <div className="summary-card">
          <h3>Leading Party</h3>
          <h2>BJP</h2>
        </div>
        <div className="summary-card">
          <h3>Seats Won by Top 3</h3>
          <h2>{57 + 39 + 13}</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <div className="chart-container">
          <h2>Seats by Party (Bar Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={partyData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="seats">
                {partyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Seat Share (Pie Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={partyData}
                dataKey="seats"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {partyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <h2>Detailed Party-wise Results</h2>
        <table className="party-table">
          <thead>
            <tr>
              <th>Party</th>
              <th>Logo</th>
              <th>Seats Won</th>
              <th>Seat %</th>
            </tr>
          </thead>
          <tbody>
            {partyData.map((party, index) => (
              <tr key={index}>
                <td>{party.name}</td>
                <td>
                  <img src={party.logo} alt={party.name} className="party-logo" />
                </td>
                <td>{party.seats}</td>
                <td>{((party.seats / totalSeats) * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartyStatsPage;

