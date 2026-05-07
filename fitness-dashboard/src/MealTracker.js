import React from 'react';

const MealTracker = ({ meals = [] }) => {
  const safeMeals = Array.isArray(meals) ? meals : [];

  return (
    <section className="meal-tracker">
      <h2>Meal Tracker</h2>
      {safeMeals.length > 0 ? (
        <ul>
          {safeMeals.map((meal, index) => {
            const label = typeof meal === 'string' ? meal : meal?.name ?? 'Meal';
            const calories = typeof meal === 'object' && meal?.calories ? ` — ${meal.calories} kcal` : '';

            return <li key={meal?.id ?? `${label}-${index}`}>{label}{calories}</li>;
          })}
        </ul>
      ) : (
        <p>No meals logged yet.</p>
      )}
    </section>
  );
};

export default MealTracker;
