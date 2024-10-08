import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./ManageConferences.css";

const ManageConferences = () => {
  const [conferences, setConferences] = useState([
    { id: 1, title: "AI Conference 2024" },
    { id: 2, title: "Data Science Summit" },
  ]);
  const [newConference, setNewConference] = useState("");

  const navigate = useNavigate(); // Initialize the hook

  const addConference = () => {
    const newConf = { id: Date.now(), title: newConference };
    setConferences([...conferences, newConf]);
    setNewConference("");
  };

  const deleteConference = (id) => {
    setConferences(conferences.filter((conf) => conf.id !== id));
  };

  const editConference = (id) => {
    const newTitle = prompt("Enter new conference title:");
    if (newTitle) {
      setConferences(
        conferences.map((conf) =>
          conf.id === id ? { ...conf, title: newTitle } : conf
        )
      );
    }
  };

  return (
    <div className="manage-conferences">
      <div className="content">
        <h1 className="content-title">Manage Conferences</h1>

        {/* Back Button */}
        <button className="btn-back" onClick={() => navigate(-1)}>
          Back
        </button>

        <div className="conference-form">
          <input
            type="text"
            placeholder="New Conference Title"
            value={newConference}
            onChange={(e) => setNewConference(e.target.value)}
          />
          <button onClick={addConference} className="btn-add">
            Add Conference
          </button>
        </div>

        <h2 className="content-subtitle">Existing Conferences</h2>
        <ul className="conference-list">
          {conferences.map((conf) => (
            <li key={conf.id} className="conference-item">
              {conf.title}
              <div className="btn-group">
                <button
                  className="btn-edit"
                  onClick={() => editConference(conf.id)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteConference(conf.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageConferences;
