import React from 'react';

const RatingBadge = ({ rating }) => {
  return (
    <div className="rating-badge">
      <span>{rating} / 10</span>
    </div>
  );
};

export default RatingBadge;