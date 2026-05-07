import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="text" name="query" placeholder="Search movies..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;