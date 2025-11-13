import React from "react";

export default function TaskRow({ task, assignee, date, status }) {
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
