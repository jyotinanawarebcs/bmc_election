import React from "react";
import TaskRow from "./TaskRow";

export default function ActionTracking() {
  return (
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
          <TaskRow task="Deploy intensive door-to-door campaign in Byculla." assignee="Anil Gupta" date="2024-05-15" status="In Progress" />
          <TaskRow task="Organize rally in Malabar Hill." assignee="Sunita Rao" date="2024-05-20" status="Completed" />
          <TaskRow task="Distribute pamphlets in Cuffe Parade." assignee="Ravi Sharma" date="2024-05-25" status="In Progress" />
          <TaskRow task="Social media push for Tardeo booth." assignee="Priya Singh" date="2024-05-18" status="Not Started" />
          <TaskRow task="Voter registration drive in Colaba." assignee="Team B" date="2024-06-01" status="Not Started" />
        </tbody>
      </table>
    </section>
  );
}
