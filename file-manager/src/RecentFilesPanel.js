import React from 'react';

const RecentFilesPanel = ({ recentFiles = [] }) => {
  return (
    <section className="recent-files-panel">
      <h2>Recent Files</h2>
      <ul>
        {recentFiles.map((file, index) => (
          <li key={file.id}>
            <strong>{file.name}</strong> - {file.dateAccessed}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentFilesPanel;