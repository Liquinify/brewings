import React, { useState } from "react";
import Search from "./Search";
import { useRecipeStore } from "../store/store";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { selectedRecipes, deleteSelectedRecipes } = useRecipeStore(
    (state) => state
  );

  const handleDeleteSelected = async () => {
    setIsLoading(true);
    try {
      await deleteSelectedRecipes();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__logo">Brewings</h2>
        {selectedRecipes.length && (
          <button className="delete-btn" onClick={handleDeleteSelected}>
            Delete
          </button>
        )}
        <Search />
      </div>
    </header>
  );
};

export default Header;
