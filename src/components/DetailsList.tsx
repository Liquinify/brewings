import { useEffect } from "react";
import { useRecipeStore } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import Details from "../pages/Details";
import { Recipe } from "../models/Recipe";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const DetailsList = () => {
  const recipe: Recipe[] = useRecipeStore((state) => state.recipe);
  const fetchRecipeById = useRecipeStore((state) => state.fetchRecipeById);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="back-btn" onClick={handleBack}>
        <HiOutlineArrowNarrowLeft className="back-btn__icon" />
        Back
      </button>
      {recipe.map((recipe, idx: number) => (
        <Details recipe={recipe} key={idx} />
      ))}
    </>
  );
};

export default DetailsList;
