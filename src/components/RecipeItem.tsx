import React from "react";
import { useRecipeStore } from "../store/store";
import { Recipe } from "../models/Recipe";

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  const selectedRecipes = useRecipeStore((state) => state.selectedRecipes);

  return (
    <div className="container">
      <div
        className={
          selectedRecipes.includes(recipe)
            ? "container__item-selected"
            : "container__item"
        }
      >
        <img
          className="container__img"
          src={recipe.image_url}
          alt="recipe img"
        />
        <h1 className="container__title">{recipe.name}</h1>
      </div>
    </div>
  );
};

export default RecipeItem;
