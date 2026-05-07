import React from 'react';

const SpeakersPanel = ({ speakers }) => {
  return (
    <div className="speakers-panel">
      <h2>Speakers</h2>
      <ul>
        {speakers.map(speaker => (
          <li key={speaker.id}>
            <img src={speaker.photo} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakersPanel;