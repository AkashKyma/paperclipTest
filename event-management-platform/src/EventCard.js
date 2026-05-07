import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <button>View Details</button>
      <button>Register</button>
    </div>
  );
};

export default EventCard;