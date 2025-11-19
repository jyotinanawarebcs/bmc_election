import React from "react";
import UpdateItem from "../../components/dashboard/UpdateItem";

export default function RecentUpdates() {
  return (
    <section className="recent-updates">
      <h3 className="updates-title">Recent Updates</h3>

      <UpdateItem
        icon="📊"
        title="New Ward Results"
        time="5m ago"
        detail="Live polling results for Andheri West are now available."
      />

      <UpdateItem
        icon="📈"
        title="New Demographic Data"
        time="2 hours ago"
        detail="2027 voter demographic data has been refreshed."
      />

      <UpdateItem
        icon="📚"
        title="Historical Data Imported"
        time="1 day ago"
        detail="2017 BMC election results have been added for comparison."
      />
    </section>
  );
}
