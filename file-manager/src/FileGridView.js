import React from 'react';

const FileGridView = ({ files = [] }) => {
  return (
    <section className="file-grid-view">
      <h2>Files</h2>
      <div className="file-grid">
        {files.map(file => (
          <div key={file.id} className="file-item">
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FileGridView;