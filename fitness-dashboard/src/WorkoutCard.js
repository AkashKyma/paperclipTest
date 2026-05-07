import React from 'react';

const WorkoutCard = ({ workout = {} }) => {
  const {
    name = 'Workout Session',
    duration = 0,
    intensity = 'Moderate',
    caloriesBurned = 0,
  } = workout;

  return (
    <article className="workout-card">
      <h3>{name}</h3>
      <p>Duration: {duration} mins</p>
      <p>Intensity: {intensity}</p>
      <p>Calories Burned: {caloriesBurned} kcal</p>
      <div className="workout-card__actions">
        <button type="button">Start</button>
        <button type="button">Log</button>
      </div>
    </article>
  );
};

export default WorkoutCard;
