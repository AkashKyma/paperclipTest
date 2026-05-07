import React from 'react';

const toNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const CalorieSummary = ({ intake = 0, expenditure = 0 }) => {
  const safeIntake = toNumber(intake);
  const safeExpenditure = toNumber(expenditure);
  const netCalories = safeIntake - safeExpenditure;

  return (
    <section className="calorie-summary">
      <h2>Calorie Summary</h2>
      <p>Intake: {safeIntake} kcal</p>
      <p>Expenditure: {safeExpenditure} kcal</p>
      <p>Net: {netCalories} kcal</p>
    </section>
  );
};

export default CalorieSummary;
