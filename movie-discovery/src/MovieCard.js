import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button>Details</button>
      <button>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;