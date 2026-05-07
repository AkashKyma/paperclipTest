import React from 'react';

const ProgressCharts = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <section className="progress-charts">
      <h2>Progress Charts</h2>
      {safeData.length > 0 ? (
        <ul className="progress-charts__list">
          {safeData.map((entry, index) => (
            <li key={entry.id ?? `${entry.label ?? 'metric'}-${index}`}>
              <strong>{entry.label ?? 'Metric'}:</strong> {entry.value ?? 0}
            </li>
          ))}
        </ul>
      ) : (
        <div className="chart-placeholder">Charts coming soon</div>
      )}
    </section>
  );
};

export default ProgressCharts;
