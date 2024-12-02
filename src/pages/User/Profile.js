// client/src/pages/User/Profile.js

import React, { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    // TODO: Save updated user info (connect to backend API)
    alert('Profile updated successfully!');
  };

  return (
    <div className="container my-5">
      <h2>User Profile</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
