// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { PieChart, Pie, Cell, Tooltip, BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
// import "../css/PopulationCardPage.css";

// const PopulationPage = () => {
//   const navigate = useNavigate();

//   // Dummy Data
//   const totalPopulation = 125000;
//   const malePercent = 52;
//   const femalePercent = 48;

//   const religionData = [
//     { name: "Hindu", value: 60.73 },
//     { name: "Muslim", value: 25.06 },
//     { name: "Christian", value: 2.74 },
//     { name: "Sikh", value: 0.44 },
//     { name: "Buddhist", value: 4.35 },
//     { name: "Jain", value: 5.38 },
//     { name: "Other", value: 1.3 },
//   ];

//   const ageData = [
//     { ageGroup: "0-14", population: 22000 },
//     { ageGroup: "15-29", population: 28000 },
//     { ageGroup: "30-44", population: 31000 },
//     { ageGroup: "45-59", population: 25000 },
//     { ageGroup: "60+", population: 19000 },
//   ];

//   const COLORS = ["#f77f00", "#d62828", "#1d3557", "#457b9d", "#2a9d8f", "#e9c46a", "#6a4c93"];

//   return (
//     <div className="population-page">
//       <div className="population-header-bar">
//         <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
//         <h1>Population Overview</h1>
//       </div>

//       {/* Top Summary Cards */}
//       <div className="summary-cards">
//         <div className="summary-card">
//           <h3>Total Population</h3>
//           <h2>{totalPopulation.toLocaleString()}</h2>
//         </div>
//         <div className="summary-card">
//           <h3>Male</h3>
//           <h2>{malePercent}%</h2>
//         </div>
//         <div className="summary-card">
//           <h3>Female</h3>
//           <h2>{femalePercent}%</h2>
//         </div>
//         <div className="summary-card">
//           <h3>Literacy Rate</h3>
//           <h2>89.2%</h2>
//         </div>
//       </div>

//       {/* Religion Chart */}
//       <div className="chart-section">
//         <h2>Religion Distribution</h2>
//         <div className="chart-container">
//           <ResponsiveContainer width="50%" height={300}>
//             <PieChart>
//               <Pie
//                 data={religionData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label
//                 dataKey="value"
//               >
//                 {religionData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           <table className="religion-table">
//             <thead>
//               <tr>
//                 <th>Religion</th>
//                 <th>Percentage</th>
//               </tr>
//             </thead>
//             <tbody>
//               {religionData.map((r, i) => (
//                 <tr key={i}>
//                   <td>{r.name}</td>
//                   <td>{r.value}%</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Age Distribution */}
//       <div className="chart-section">
//         <h2>Religion Distribution</h2>
//         <div className="chart-container">
//             <div style={{ flex: 1, minWidth: "300px", height: "300px" }}>
//             <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                 <Pie
//                     data={religionData}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={100}
//                     label
//                     dataKey="value"
//                 >
//                     {religionData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                 </Pie>
//                 <Tooltip />
//                 </PieChart>
//             </ResponsiveContainer>
//             </div>

//             <table className="religion-table">
//             <thead>
//                 <tr>
//                 <th>Religion</th>
//                 <th>Percentage</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {religionData.map((r, i) => (
//                 <tr key={i}>
//                     <td>{r.name}</td>
//                     <td>{r.value}%</td>
//                 </tr>
//                 ))}
//             </tbody>
//             </table>
//         </div>
//         </div>

//     </div>
//   );
// };

// export default PopulationPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../css/PopulationCardPage.css";

const PopulationPage = () => {
  const navigate = useNavigate();

  // Example Data (Replace later with API data)
  const wardName = "Ward 12 – Kalyan East";
  const totalPopulation = 125000;
  const malePercent = 52;
  const femalePercent = 48;
  const literacyRate = 89.2;

  const religionData = [
    { name: "Hindu", value: 60.73 },
    { name: "Muslim", value: 25.06 },
    { name: "Christian", value: 2.74 },
    { name: "Sikh", value: 0.44 },
    { name: "Buddhist", value: 4.35 },
    { name: "Jain", value: 5.38 },
    { name: "Other", value: 1.3 },
  ];

  const ageData = [
    { ageGroup: "0-14", population: 22000 },
    { ageGroup: "15-29", population: 28000 },
    { ageGroup: "30-44", population: 31000 },
    { ageGroup: "45-59", population: 25000 },
    { ageGroup: "60+", population: 19000 },
  ];

  const COLORS = ["#6C63FF", "#00BFA6", "#FFB400", "#F24E1E", "#3D5A80", "#EE6C4D", "#293241"];

  return (
    <div className="population-dashboard">
      {/* Header */}
      <header className="header-bar">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h1>{wardName}</h1>
        <p className="subtitle">Demographic Insights & Population Breakdown</p>
      </header>

      {/* Summary Cards */}
      <div className="stats-grid">
        <div className="stat-card total">
          <h4>Total Population</h4>
          <p>{totalPopulation.toLocaleString()}</p>
        </div>
        <div className="stat-card male">
          <h4>Male</h4>
          <p>{malePercent}%</p>
        </div>
        <div className="stat-card female">
          <h4>Female</h4>
          <p>{femalePercent}%</p>
        </div>
        <div className="stat-card literacy">
          <h4>Literacy Rate</h4>
          <p>{literacyRate}%</p>
        </div>
      </div>

      {/* Religion Distribution */}
      <section className="data-section">
        <div className="section-header">
          <h2>Religion Composition</h2>
          <span className="section-line"></span>
        </div>

        <div className="chart-layout">
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={religionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                >
                  {religionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="data-table">
            <table>
              <thead>
                <tr>
                  <th>Religion</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {religionData.map((r, i) => (
                  <tr key={i}>
                    <td>{r.name}</td>
                    <td>{r.value}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Age Group Distribution */}
      <section className="data-section">
        <div className="section-header">
          <h2>Age Group Distribution</h2>
          <span className="section-line"></span>
        </div>

        <div className="chart-layout single">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="population" fill="#6C63FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default PopulationPage;
