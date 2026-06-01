import React from 'react';
import './DownloadButtons.css';

const DownloadButtons = () => {
  return (
    <div className="download-buttons">
      <a href="#" className="app-store-button">Download on the App Store</a>
      <a href="#" className="google-play-button">Get it on Google Play</a>
    </div>
  );
};

export default DownloadButtons;