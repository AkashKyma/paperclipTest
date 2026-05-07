import React from 'react';

const StorageStats = ({ used, available }) => {
  const total = used + available;
  const percentUsed = ((used / total) * 100).toFixed(2);

  return (
    <section className="storage-stats">
      <h2>Storage Stats</h2>
      <p>Used: {used} GB</p>
      <p>Available: {available} GB</p>
      <p>Total: {total} GB</p>
      <p>Usage: {percentUsed}%</p>
    </section>
  );
};

export default StorageStats;