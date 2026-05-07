import React from 'react';

const DetailModal = ({ movie, onClose }) => {
  return (
    <div className="detail-modal">
      <div className="modal-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DetailModal;