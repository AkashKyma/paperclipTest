import React from 'react';

const WatchlistSidebar = ({ watchlist = [] }) => {
  return (
    <aside className="watchlist-sidebar">
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default WatchlistSidebar;