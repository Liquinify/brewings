import { useState } from "react";
import Search from "./Search";
import { useRecipeStore } from "../store/store";
import Loader from "./Loader";

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
    <>
      {isLoading && <Loader />}
      <header className="header">
        <div className="header__content">
          <h2 className="header__logo">Brewings</h2>
          <div className="header__flex gap">
            <div className="header__flex gap">
              <p className="header__text">Selected: {selectedRecipes.length}</p>
              {!selectedRecipes.length ? null : (
                <button className="delete-btn" onClick={handleDeleteSelected}>
                  Delete
                </button>
              )}
            </div>
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
