import React from 'react';

const MealTracker = ({ meals }) => {
  return (
    <div className="meal-tracker">
      <h2>Meal Tracker</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealTracker;