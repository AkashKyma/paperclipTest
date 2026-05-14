import React, { useState } from 'react';
import './SeatSelection.css';

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seats</h2>
      <div className="seats">
        {[1, 2, 3, 4, 5].map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;