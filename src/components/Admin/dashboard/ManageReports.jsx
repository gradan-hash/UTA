import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import "./ManageReports.css";

const ManageReports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "AI Conference 2024 - Call for Papers",
      description: "Submission deadline is March 2024",
      type: "Call for Papers",
    },
    {
      id: 2,
      title: "Data Science Annual Report",
      description: "Year-end report for data science trends",
      type: "Annual Report",
    },
  ]);

  const [newReport, setNewReport] = useState({
    title: "",
    description: "",
    type: "",
  });
  const navigate = useNavigate();

  const addReport = () => {
    const newRep = { id: Date.now(), ...newReport };
    setReports([...reports, newRep]);
    setNewReport({ title: "", description: "", type: "" });
  };

  const deleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  const editReport = (id) => {
    const newTitle = prompt("Enter new report title:");
    const newDescription = prompt("Enter new report description:");
    if (newTitle && newDescription) {
      setReports(
        reports.map((report) =>
          report.id === id
            ? { ...report, title: newTitle, description: newDescription }
            : report
        )
      );
    }
  };

  // Data for CSV download
  const csvData = reports.map((report) => ({
    Title: report.title,
    Description: report.description,
    Type: report.type,
  }));

  return (
    <div className="manage-reports">
      <div className="content">
        <h1 className="content-title">Manage Reports</h1>

        {/* Back Button */}
        <button className="btn-back" onClick={() => navigate(-1)}>
          Back
        </button>

        {/* Add Report Section */}
        <div className="report-form">
          <input
            type="text"
            placeholder="Report Title"
            value={newReport.title}
            onChange={(e) =>
              setNewReport({ ...newReport, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Report Description"
            value={newReport.description}
            onChange={(e) =>
              setNewReport({ ...newReport, description: e.target.value })
            }
          />
          <select
            value={newReport.type}
            onChange={(e) =>
              setNewReport({ ...newReport, type: e.target.value })
            }>
            <option value="" disabled>
              Select Report Type
            </option>
            <option value="Call for Papers">Call for Papers</option>
            <option value="Annual Report">Annual Report</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={addReport} className="btn-add">
            Add Report
          </button>
        </div>

        <h2 className="content-subtitle">Existing Reports</h2>

        {/* Reports List */}
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.id} className="report-item">
              <div className="report-details">
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <span className="report-type">{report.type}</span>
              </div>
              <div className="btn-group">
                <button
                  className="btn-edit"
                  onClick={() => editReport(report.id)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteReport(report.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* CSV Download */}
        <div className="csv-download">
          <CSVLink
            data={csvData}
            filename={"conference-reports.csv"}
            className="btn-csv"
            target="_blank">
            Download Reports as CSV
          </CSVLink>
        </div>
      </div>
    </div>
  );
};

export default ManageReports;
