import React from 'react';

function WorkoutCards() {
  return (
    <div className="workout-cards">
      <h2>Workout Cards</h2>
      {/* Sample workout card */}
      <div className="workout-card">
        <h3>Cardio Blast</h3>
        <p>Duration: 30 mins</p>
        <p>Calories Burned: 300</p>
      </div>
    </div>
  );
}

export default WorkoutCards;