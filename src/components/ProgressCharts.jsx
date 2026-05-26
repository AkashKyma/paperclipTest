import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', progress: 400 },
  { name: 'Week 2', progress: 300 },
  { name: 'Week 3', progress: 200 },
  { name: 'Week 4', progress: 278 },
  { name: 'Week 5', progress: 189 },
];

function ProgressCharts() {
  return (
    <div className="progress-charts">
      <h2>Progress Charts</h2>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="progress" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default ProgressCharts;