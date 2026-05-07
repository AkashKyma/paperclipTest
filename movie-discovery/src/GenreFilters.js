import React, { useState } from 'react';

const GenreFilters = ({ genres = [], onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const handleChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onFilter(genre);
  };

  return (
    <div className="genre-filters">
      <label>Filter by Genre:</label>
      <select value={selectedGenre} onChange={handleChange}>
        <option value="all">All</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilters;