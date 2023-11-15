import { useState, useEffect } from "react";
import { Recipe } from "../models/Recipe";
import { useRecipeStore } from "../store/store";

export const useRecipeList = () => {
  const [range, setRange] = useState<[number, number]>([0, 15]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    updateSelectedRecipes,
    selectedRecipes,
    searchValue,
    recipes,
    fetchRecipes,
    addPage,
  } = useRecipeStore((state) => state);

  const filteredRecipes =
    searchValue === ""
      ? recipes.slice(range[0], range[1])
      : recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .slice(range[0], range[1]);
  const handleAddToSelected = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    recipe: Recipe
  ) => {
    event.preventDefault();
    if (selectedRecipes.includes(recipe)) {
      const newSelectedRecipes = selectedRecipes.filter(
        (selectedRecipe) => selectedRecipe.id !== recipe.id
      );
      updateSelectedRecipes(newSelectedRecipes);
    } else {
      const newSelectedRecipes = [...selectedRecipes, recipe];
      updateSelectedRecipes(newSelectedRecipes);
    }
  };

  useEffect(() => {
    if (recipes.length < 15) {
      setIsLoading(true);
      fetchRecipes()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [fetchRecipes, recipes.length]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      if (scrollTop === 0) {
        setIsLoading(false);
        if (range[0] >= 5) {
          setRange((prevRange) => [prevRange[0] - 5, prevRange[1] - 5]);
          window.scrollTo(0, 10);
        } else if (range[0] > 0) {
          setRange((prevRange) => [0, prevRange[1] - range[0]]);
        }
      } else if (
        scrollTop + clientHeight >=
        document.documentElement.scrollHeight
      ) {
        if (recipes.length < range[1] + 5) {
          addPage();
          setIsLoading(true);
          fetchRecipes()
            .then(() => {
              setIsLoading(false);
              setRange((prevRange) => [prevRange[0] + 5, prevRange[1] + 5]);
              console.log("loading succeeded");
            })
            .catch(() => {
              setIsLoading(false);
              console.log("Error while loading data");
            });
        } else {
          setRange((prevRange) => [prevRange[0] + 5, prevRange[1] + 5]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [range, recipes, addPage, fetchRecipes]);

  return { handleAddToSelected, filteredRecipes, range, setRange, isLoading };
};
