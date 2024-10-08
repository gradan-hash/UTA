import Sidebar from "../Sidebar/Sidebar";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>
              <Link className="Link" to="/admin/manage-conferences">
                Total Conferences
              </Link>
            </h3>
            <p>10</p>
          </div>
          <div className="dashboard-card">
            <h3>
              <Link className="Link" to="/admin/manage-users">
                Total Users
              </Link>
            </h3>
            <p>250</p>
          </div>
          <div className="dashboard-card">
            <h3>
              <Link className="Link" to="/admin/reports">
                Reports Generated
              </Link>
            </h3>
            <p>50</p>
          </div>
          <div className="dashboard-card">
            <h3>
              <Link className="Link" to="/admin/manage-conferences">
                Pending Conferences
              </Link>
            </h3>
            <p>5</p>
          </div>
        </div>

        <div className="dashboard-statistics">
          <h2>Recent Activity</h2>
          <p>
            Track recent activity in the system, such as user registrations and
            conference submissions.
          </p>
          {/* You can add a table or more components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
