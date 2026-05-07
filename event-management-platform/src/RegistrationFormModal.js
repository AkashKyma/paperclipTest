import React from 'react';

const RegistrationFormModal = ({ show, onClose }) => {
  return (
    <div className={`registration-form-modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Register for Event</h2>
        <form>
          <label>Name:
            <input type="text" required />
          </label>
          <label>Email:
            <input type="email" required />
          </label>
          <label>Payment Method:
            <select required>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegistrationFormModal;