import React from 'react';
import './DownloadSection.css';
import AppPreview from './AppPreview';
import DownloadButtons from './DownloadButtons';

const DownloadSection = () => {
  return (
    <section className="download-section">
      <h1>Download Our App</h1>
      <p>Experience the best features and stay connected with our app.</p>
      <AppPreview />
      <DownloadButtons />
    </section>
  );
};

export default DownloadSection;