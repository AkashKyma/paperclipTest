import React from 'react';
import './BookingSummary.css';

function BookingSummary() {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <p>Movie: The Great Adventure</p>
      <p>Showtime: 3:00 PM</p>
      <p>Seats: 1, 2</p>
    </div>
  );
}

export default BookingSummary;