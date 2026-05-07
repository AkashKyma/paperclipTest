import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button>View Recipe</button>
      <button>Add to Favorites</button>
    </div>
  );
};

export default RecipeCard;