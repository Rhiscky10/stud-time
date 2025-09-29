import React from "react";

export default function Schedule() {
  const events = [
    { title: "Math Class", type: "event-class" },
    { title: "Group Study", type: "event-study" },
    { title: "Project Meeting", type: "event-meeting" },
    { title: "Assignment Deadline", type: "event-deadline" },
  ];

  return (
    <div>
      <h2>Schedule</h2>
      <ul>
        {events.map((event, i) => (
          <li key={i} className={event.type}>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
