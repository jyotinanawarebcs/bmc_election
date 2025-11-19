import React from "react";
// import "./../styles/components.css";

export default function ActionTable() {
  const rows = [
    ["Deploy intensive door-to-door campaign in Byculla.", "Anil Gupta", "2024-05-15", "In Progress"],
    ["Organize rally in Malabar Hill.", "Sunita Rao", "2024-05-20", "Completed"],
    ["Distribute pamphlets in Cuffe Parade.", "Ravi Sharma", "2024-05-25", "In Progress"],
    ["Social media push for Tardeo booth.", "Priya Singh", "2024-05-18", "Not Started"],
    ["Voter registration drive in Colaba.", "Team B", "2024-06-01", "Not Started"]
  ];

  return (
    <div className="table-card">
      <h3>Action Tracking</h3>

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
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td>
                <span className={`status ${r[3].toLowerCase().replace(" ", "")}`}>
                  {r[3]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
