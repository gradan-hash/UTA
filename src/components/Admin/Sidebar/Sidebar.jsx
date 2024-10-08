import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    alert("Logged out");
    navigate("/admin"); // Redirect to homepage after logout
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
        {/* <button className="toggle-btn" onClick={toggleSidebar}></button> */}
      </div>
      <ul>
        <li>
          <Link to="/admin/manage-conferences">Manage Conferences</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/reports">Reports</Link>
        </li>
        {/* <li>
          <Link to="/admin/settings">Settings</Link>
        </li> */}
        <li>
          <Link to="/admin" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
