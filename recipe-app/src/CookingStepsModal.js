import React from 'react';

const CookingStepsModal = ({ steps, show, onClose }) => {
  return (
    <div className={`cooking-steps-modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Cooking Steps</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CookingStepsModal;