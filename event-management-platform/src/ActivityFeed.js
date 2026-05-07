import React from 'react';

const ActivityFeed = ({ activities }) => {
  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <p>{activity.message}</p>
            <small>{activity.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;