import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Day 2', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Day 3', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Day 4', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Day 5', uv: 189, pv: 4800, amt: 2181 },
];

function ProgressCharts() {
  return (
    <div className="progress-charts">
      <h2>Progress Charts</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressCharts;