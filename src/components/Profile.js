import React, { useState } from 'react';

const Profile = ({ profile }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-container">
      <div className="profile-header" onClick={handleDropdownToggle}>
        <img src={profile.picture} alt="Profile" className="profile-picture" />
        <span className="profile-name">{profile.name}</span>
        <button className="profile-dropdown-toggle">
          <span className="visually-hidden">Toggle profile options</span>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="profile-dropdown">
          <button className="dropdown-item">View Profile</button>
          <button className="dropdown-item">Settings</button>
          <button className="dropdown-item">Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
