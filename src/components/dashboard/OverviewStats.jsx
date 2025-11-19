import React from "react";
import StatBox from "../../components/dashboard/StatBox.jsx";

export default function OverviewStats() {
  return (
    <section className="dashboard-overview">
      <h2 className="overview-title">Dashboard Overview</h2>
      <p className="overview-description">
        Real-time insights and analytics for the Mumbai BMC Election 2027.
      </p>

      <div className="overview-stats">
        <StatBox
          label="Total Registered Voters"
          value="1,25,000"
          time="Updated just now"
        />

        <StatBox
          label="Winning Probability"
          value="78%"
          time="Based on current trends"
        />

        <StatBox
          label="Competitor Seats"
          value="95"
          time="Across all wards"
        />

        <StatBox
          label="Seats Won by Region"
          value="132"
          time="Breakdown available below"
        />
      </div>
    </section>
  );
}
