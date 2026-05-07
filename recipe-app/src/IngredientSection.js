import React from 'react';

const IngredientSection = ({ ingredients }) => {
  return (
    <div className="ingredient-section">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientSection;