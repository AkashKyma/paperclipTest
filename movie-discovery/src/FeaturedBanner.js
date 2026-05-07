import React from 'react';

const FeaturedBanner = ({ featuredMovie }) => {
  return (
    <div className="featured-banner">
      <h2>Featured Movie: {featuredMovie.title}</h2>
      <button>Play</button>
      <button>Add to Watchlist</button>
    </div>
  );
};

export default FeaturedBanner;