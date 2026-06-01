import React from 'react';
import './AppDownloadSection.css';
import AppPreview from './AppPreview';
import DownloadButtons from './DownloadButtons';

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <h1>Download Our App</h1>
      <p>Experience the best features and stay connected on the go.</p>
      <AppPreview />
      <DownloadButtons />
    </section>
  );
};

export default AppDownloadSection;