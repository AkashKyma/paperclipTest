import React from 'react';

const SchedulePanel = ({ schedule }) => {
  return (
    <div className="schedule-panel">
      <h2>Schedule</h2>
      <ul>
        {schedule.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePanel;