import React from 'react';
import RecipeCard from './RecipeCard';

const FeaturedRecipes = ({ recipes }) => {
  return (
    <div className="featured-recipes">
      <h2>Featured Recipes</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;