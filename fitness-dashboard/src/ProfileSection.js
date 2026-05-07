import React from 'react';

const ProfileSection = ({ user = {} }) => {
  const {
    name = 'Guest User',
    age = '—',
    height = '—',
    weight = '—',
    goal = 'Stay active',
  } = user;

  return (
    <section className="profile-section">
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Goal: {goal}</p>
    </section>
  );
};

export default ProfileSection;
