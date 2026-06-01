import React from 'react';
import './DownloadButtons.css';

const DownloadButtons = () => {
  return (
    <div className="download-buttons">
      <a href="#" className="download-button app-store">App Store</a>
      <a href="#" className="download-button google-play">Google Play</a>
    </div>
  );
};

export default DownloadButtons;