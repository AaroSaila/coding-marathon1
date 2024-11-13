import React, { useState } from 'react';
import './RecipeManager.css';

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const addRecipe = () => {
    const newRecipe = {
      id: Date.now(),
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions
    };
    setRecipes([...recipes, newRecipe]);
    setName('');
    setIngredients('');
    setInstructions('');
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <div className="form-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe Name"
        />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma separated)"
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.name}</h2>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeManager;