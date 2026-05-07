import React from 'react';

const SchedulePanel = ({ schedule = [] }) => {
  const safeSchedule = Array.isArray(schedule) ? schedule : [];

  return (
    <section className="schedule-panel">
      <h2>Schedule</h2>
      {safeSchedule.length > 0 ? (
        <ul>
          {safeSchedule.map((activity, index) => {
            const label = typeof activity === 'string' ? activity : activity?.title ?? 'Scheduled activity';
            const time = typeof activity === 'object' && activity?.time ? ` — ${activity.time}` : '';

            return <li key={activity?.id ?? `${label}-${index}`}>{label}{time}</li>;
          })}
        </ul>
      ) : (
        <p>No scheduled activities.</p>
      )}
    </section>
  );
};

export default SchedulePanel;
