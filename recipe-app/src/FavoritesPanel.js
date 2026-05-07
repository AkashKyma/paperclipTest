import React from 'react';

const FavoritesPanel = ({ favorites, onRemove }) => {
  return (
    <div className="favorites-panel">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite}
            <button onClick={() => onRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPanel;