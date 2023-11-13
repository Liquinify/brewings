import React from "react";
import { useRecipeStore } from "../store/store";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  const { searchValue, setSearchValue } = useRecipeStore((state) => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <BiSearchAlt2 className="search__icon" />
      <input
        value={searchValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Search..."
        className="search__input"
      />
    </form>
  );
};

export default Search;
