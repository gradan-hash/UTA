import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import dummyData from "../dummyData";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = dummyData.find(
      (user) => user.username === username && user.password === password
    );

    if (admin) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Admin Login</h1>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
