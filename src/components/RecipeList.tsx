import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../models/Recipe";
import { useRecipeList } from "../hooks/useRecipeList";
import RecipeItem from "./RecipeItem";
import Loader from "./Loader";

const RecipeList = () => {
  const { handleAddToSelected, filteredRecipes, isLoading } = useRecipeList();

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid">
        {filteredRecipes.map((recipe: Recipe) => (
          <Link to={`/beer/${recipe.id}`} key={recipe.id}>
            <span
              onContextMenu={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => handleAddToSelected(event, recipe)}
            >
              <RecipeItem recipe={recipe} />
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
