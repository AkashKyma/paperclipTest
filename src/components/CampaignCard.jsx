import React from 'react';
import './CampaignCard.css';

function CampaignCard() {
  return (
    <div className="campaign-card">
      <h2>Campaign Title</h2>
      <p>Short description of the campaign.</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div>
      </div>
      <button>Pledge</button>
    </div>
  );
}

export default CampaignCard;
