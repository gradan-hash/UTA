import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
  const [newUser, setNewUser] = useState("");

  const navigate = useNavigate(); // Initialize the navigate hook

  const addUser = () => {
    const newUsr = { id: Date.now(), name: newUser };
    setUsers([...users, newUsr]);
    setNewUser("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const newName = prompt("Enter new user name:");
    if (newName) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, name: newName } : user
        )
      );
    }
  };

  return (
    <div className="manage-users">
      <div className="content">
        <h1 className="content-title">Manage Users</h1>

        {/* Back Button */}
        <button className="btn-back" onClick={() => navigate(-1)}>
          Back
        </button>

        <div className="user-form">
          <input
            type="text"
            placeholder="New User Name"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button onClick={addUser} className="btn-add">
            Add User
          </button>
        </div>

        <h2 className="content-subtitle">Existing Users</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              {user.name}
              <div className="btn-group">
                <button className="btn-edit" onClick={() => editUser(user.id)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteUser(user.id)}>
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

export default ManageUsers;
