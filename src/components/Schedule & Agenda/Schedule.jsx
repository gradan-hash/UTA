import  { useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  // Simulated session data
  const sessions = [
    {
      time: "9:00 AM",
      session: "Opening Keynote",
      speaker: "Dr. Jane Smith",
      details: "Discussing the future of AI in healthcare.",
      bio: "Dr. Jane Smith is an expert in AI and its applications in healthcare, with over 20 years of experience.",
    },
    {
      time: "10:30 AM",
      session: "Data Science Workshop",
      speaker: "Dr. John Doe",
      details: "Hands-on session on data visualization techniques.",
      bio: "Dr. John Doe is a data science specialist focusing on data visualization and predictive analytics.",
    },
    {
      time: "12:00 PM",
      session: "Lunch Break",
      speaker: "N/A",
      details: "Networking opportunities and refreshments.",
      bio: "",
    },
  ];

  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  const handleExportClick = () => {
    const csvHeaders = ["Time", "Session", "Speaker", "Details"];
    const csvRows = sessions.map((session) => [
      session.time,
      session.session,
      session.speaker,
      session.details,
    ]);

    // Combine headers and rows
    let csvContent =
      "data:text/csv;charset=utf-8," +
      csvHeaders.join(",") +
      "\n" +
      csvRows.map((row) => row.join(",")).join("\n");

    // Create a download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "conference_schedule.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
  };

  return (
    <section className="schedule-section">
      <h1 className="schedule-title">Conference Schedule</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Speaker</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index} onClick={() => handleSessionClick(session)}>
              <td>{session.time}</td>
              <td>{session.session}</td>
              <td>{session.speaker}</td>
              <td>{session.details}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Interactive Session Details */}
      {selectedSession && (
        <div className="session-details">
          <h2>Session Details: {selectedSession.session}</h2>
          <p>
            <strong>Speaker:</strong> {selectedSession.speaker}
          </p>
          <p>
            <strong>Details:</strong> {selectedSession.details}
          </p>
          {selectedSession.bio && (
            <p>
              <strong>Speaker Bio:</strong> {selectedSession.bio}
            </p>
          )}
        </div>
      )}

      <button className="schedule-export-button" onClick={handleExportClick}>
        Export Schedule as CSV
      </button>
    </section>
  );
};

export default Schedule;
