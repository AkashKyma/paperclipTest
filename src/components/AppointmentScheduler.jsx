import React, { useState } from 'react';
import './AppointmentScheduler.css';

function AppointmentScheduler() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="appointment-scheduler">
      <h2>Schedule an Appointment</h2>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button>Book Now</button>
    </div>
  );
}

export default AppointmentScheduler;
