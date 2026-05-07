import React from 'react';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <p>Duration: {workout.duration} mins</p>
      <p>Intensity: {workout.intensity}</p>
      <button>Start</button>
      <button>Log</button>
    </div>
  );
};

export default WorkoutCard;