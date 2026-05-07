import React from 'react';

const ProfileSection = ({ user }) => {
  return (
    <div className="profile-section">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Height: {user.height}</p>
      <p>Weight: {user.weight}</p>
    </div>
  );
};

export default ProfileSection;