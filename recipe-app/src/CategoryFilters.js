import React from 'react';

const CategoryFilters = ({ categories, onSelect }) => {
  return (
    <div className="category-filters">
      {categories.map(category => (
        <button key={category} onClick={() => onSelect(category)}>{category}</button>
      ))}
    </div>
  );
};

export default CategoryFilters;