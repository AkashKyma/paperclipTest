import React, { useState } from 'react';

const UploadModal = ({ onUpload }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    if (files.length) {
      onUpload(files);
      setFiles([]);
    }
  };

  return (
    <div className="upload-modal">
      <h2>Upload Files</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadModal;