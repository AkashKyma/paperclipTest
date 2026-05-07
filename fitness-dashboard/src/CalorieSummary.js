import React from 'react';

const CalorieSummary = ({ intake, expenditure }) => {
  return (
    <div className="calorie-summary">
      <h2>Calorie Summary</h2>
      <p>Intake: {intake} kcal</p>
      <p>Expenditure: {expenditure} kcal</p>
      <p>Net: {intake - expenditure} kcal</p>
    </div>
  );
};

export default CalorieSummary;